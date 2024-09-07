import * as Blockly from "blockly";
import { blocks } from "../../blocly/blocks/text";  // Custom blocks
import { forBlock } from "../../blocly/generators/javascript";  // Custom generators
import { luaGenerator } from "blockly/lua";  // Import the Lua generator
import { toolbox } from "../../blocly/toolbox";  // Toolbox definition

import { Component, h } from "preact";
import { editorView } from "../styles.css"; // Assuming styles for tabs

// Реєструємо кастомні блоки та генератори з Blockly
Blockly.common.defineBlocks(blocks);
Object.assign(luaGenerator.forBlock, forBlock);

export type BlocklyEditorProps = {
  activeFile: string | null;  // Поточний активний файл
};

type BlocklyEditorState = {
  activeTab: 'blockly' | 'generatedCode'; // Статус активної вкладки
};

export default class BlocklyEditor extends Component<BlocklyEditorProps, BlocklyEditorState> {
  private workspace: Blockly.WorkspaceSvg | null = null;
  private codeDiv: HTMLElement | null = null;

  constructor(props: BlocklyEditorProps) {
    super(props);
    this.state = {
      activeTab: 'blockly', // Встановлюємо вкладку Blockly як активну за замовчуванням
    };
  }

  public componentDidMount() {
    if (this.props.activeFile) {
      this.setupEditor();
    }
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  }

  public componentDidUpdate(prevProps: BlocklyEditorProps) {
    if (prevProps.activeFile !== this.props.activeFile) {
      this.saveWorkspaceForActiveFile(prevProps.activeFile); // Зберігаємо для попереднього файлу
      this.restoreWorkspaceForActiveFile(); // Відновлюємо для нового файлу
    }
  }

  public componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
    this.saveWorkspaceForActiveFile();
    if (this.workspace) {
      this.workspace.dispose();
      this.workspace = null;
    }
  }

  private saveWorkspaceForActiveFile = (file?: string | null) => {
    const activeFileToSave = file || this.props.activeFile;
    if (this.workspace && activeFileToSave) {
      const workspaceState = Blockly.serialization.workspaces.save(this.workspace);
      localStorage.setItem(`blocklyWorkspace_${activeFileToSave}`, JSON.stringify(workspaceState));
    }
  };

  private restoreWorkspaceForActiveFile = () => {
    const { activeFile } = this.props;
    if (activeFile && this.workspace) {
      const savedWorkspace = localStorage.getItem(`blocklyWorkspace_${activeFile}`);
      if (savedWorkspace) {
        Blockly.serialization.workspaces.load(JSON.parse(savedWorkspace), this.workspace);
      }
    }
  };

  private handleBeforeUnload = () => {
    this.saveWorkspaceForActiveFile();
  };

  private setupEditor() {
    if (!this.props.activeFile) return;

   

    this.codeDiv = document.getElementById("generatedCode");

    // if (blocklyDiv && this.codeDiv) {
      const options: Blockly.BlocklyOptions = {
        toolbox: toolbox,
        collapse: true,
        comments: true,
        disable: true,
        maxBlocks: Infinity,
        trashcan: true,
        horizontalLayout: false,
        toolboxPosition: 'start',
        css: true,
        media: 'https://unpkg.com/blockly/media/',
        rtl: false,
        scrollbars: true,
        sounds: true,
        oneBasedIndex: true,
        renderer: 'zelos',
        grid: {
          spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true,
        },
        theme: Blockly.Themes.Zelos,
      };

      const blocklyDiv = document.getElementById('blocklyDiv');
      if (blocklyDiv) {
        this.workspace = Blockly.inject(blocklyDiv, options);
      }
      this.restoreWorkspaceForActiveFile();

      // Додаємо слухач для оновлення коду після зміни блоків
      if (this.workspace) {
        this.workspace.addChangeListener(() => {
          this.saveWorkspaceForActiveFile();
          this.runCode();  // Оновлюємо код після кожної зміни
        });
      }

      this.runCode();  // Перший запуск коду
    // }
  }

  private changeTab = (tab: 'blockly' | 'generatedCode') => {
    this.setState({ activeTab: tab }, () => {
      if (tab === 'blockly' && !this.workspace) {
        this.setupEditor();  // Запускаємо редактор після зміни вкладки
      }
    });
  };
  
  

  private runCode() {
    if (this.workspace && this.codeDiv) {
      const code = luaGenerator.workspaceToCode(this.workspace);
      this.codeDiv.innerText = code;
    }
  }

  private copyToClipboard() {
    const codeDiv = document.getElementById("generatedCode");
    if (codeDiv) {
      const range = document.createRange();
      range.selectNode(codeDiv);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand("copy");
      window.getSelection()?.removeAllRanges();
    }
  }


  public render() {
    if (!this.props.activeFile) {
      return <div style={{ padding: '20px', textAlign: 'center' }}>Будь ласка, виберіть файл для роботи з Blockly</div>;
    }

    const { activeTab } = this.state;

    return (
      

      <div style={{ width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <button onClick={() => this.changeTab('blockly')} style={{ marginRight: '1rem' }} disabled={activeTab === 'blockly'}>Blockly</button>
            <button onClick={() => this.changeTab('generatedCode')} disabled={activeTab === 'generatedCode'}>Generated Code</button>
          </div>

            <div className={editorView} id="blocklyDiv" style={{ height: '100%', border: '1px solid #ddd', borderRadius: '5px', overflow: 'hidden', width: '100%' }}></div>

            <div>
              <h3>Generated Lua code</h3>
              <pre id="generatedCode"></pre>
              <button onClick={this.copyToClipboard}>Copy to Clipboard</button>
            </div>

        </div>
      </div>
    );
  }
}


