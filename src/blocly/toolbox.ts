/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/*
This toolbox contains nearly every single built-in block that Blockly offers.
You probably don't need every single block, and should consider either rewriting
your toolbox from scratch, or carefully choosing whether you need each block
listed here.
*/

export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Керування",
      categorystyle: "logic_category",
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
        {
          kind: "block",
          type: "logic_compare",
        },
        {
          kind: "block",
          type: "logic_operation",
        },
        {
          kind: "block",
          type: "logic_negate",
        },
        {
          kind: "block",
          type: "logic_boolean",
        },
        {
          kind: "block",
          type: "logic_null",
        },
        {
          kind: "block",
          type: "logic_ternary",
        },
      ],
    },
    {
      kind: "category",
      name: "Цикли",
      categorystyle: "loop_category",
      contents: [
        {
          kind: "block",
          type: "controls_repeat_ext",
          inputs: {
            TIMES: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "controls_whileUntil",
        },
        {
          kind: "block",
          type: "controls_for",
          inputs: {
            FROM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
            BY: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "controls_forEach",
        },
        {
          kind: "block",
          type: "controls_flow_statements",
        },
      ],
    },
    {
      kind: "category",
      name: "Математика",
      categorystyle: "math_category",
      contents: [
        {
          kind: "block",
          type: "math_number",
          fields: {
            NUM: 123,
          },
        },
        {
          kind: "block",
          type: "math_arithmetic",
          inputs: {
            A: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            B: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_single",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 9,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_trig",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 45,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_constant",
        },
        {
          kind: "block",
          type: "math_number_property",
          inputs: {
            NUMBER_TO_CHECK: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_round",
          fields: {
            OP: "ROUND",
          },
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 3.1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_on_list",
          fields: {
            OP: "SUM",
          },
        },
        {
          kind: "block",
          type: "math_modulo",
          inputs: {
            DIVIDEND: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 64,
                },
              },
            },
            DIVISOR: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_constrain",
          inputs: {
            VALUE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 50,
                },
              },
            },
            LOW: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            HIGH: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_random_int",
          inputs: {
            FROM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_random_float",
        },
        {
          kind: "block",
          type: "math_atan2",
          inputs: {
            X: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            Y: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Текст",
      categorystyle: "text_category",
      contents: [
        {
          kind: "block",
          type: "text"
        },
        {
          kind: "block",
          type: "text_join"
        },
        {
          kind: "block",
          type: "text_append"
        },
        {
          kind: "block",
          type: "text_length"
        },
        {
          kind: "block",
          type: "text_isEmpty"
        },
        {
          kind: "block",
          type: "text_indexOf"
        },
        {
          kind: "block",
          type: "text_charAt"
        },
        {
          kind: "block",
          type: "text_getSubstring"
        },
        {
          kind: "block",
          type: "text_changeCase"
        },
        {
          kind: "block",
          type: "text_trim"
        },
        // {
        //   kind: "block",
        //   type: "text_join",
        // },
        // {
        //   kind: "block",
        //   type: "text_append",
        //   inputs: {
        //     TEXT: {
        //       shadow: {
        //         type: "text",
        //         fields: {
        //           TEXT: "Привіт Світ!",
        //         },
        //       },
        //     },
        //   },
        // },
        // {
        //   kind: "block",
        //   type: "text_length",
        //   inputs: {
        //     VALUE: {
        //       shadow: {
        //         type: "text",
        //         fields: {
        //           TEXT: "abc",
        //         },
        //       },
        //     },
        //   },
        // },
        // {
        //   kind: "block",
        //   type: "text_isEmpty",
        //   inputs: {
        //     VALUE: {
        //       shadow: {
        //         type: "text",
        //         fields: {
        //           TEXT: "",
        //         },
        //       },
        //     },
        //   },
        // },
        // {
        //   kind: "block",
        //   type: "text_indexOf",
        //   inputs: {
        //     VALUE: {
        //       block: {
        //         type: "variables_get",
        //       },
        //     },
        //     FIND: {
        //       shadow: {
        //         type: "text",
        //         fields: {
        //           TEXT: "abc",
        //         },
        //       },
        //     },
        //   },
        // },
        // {
        //   kind: "block",
        //   type: "text_charAt",
        //   inputs: {
        //     VALUE: {
        //       block: {
        //         type: "variables_get",
        //       },
        //     },
        //   },
        // },
        // {
        //   kind: "block",
        //   type: "text_getSubstring",
        //   inputs: {
        //     STRING: {
        //       block: {
        //         type: "variables_get",
        //       },
        //     },
        //   },
        // },
        // {
        //   kind: "block",
        //   type: "text_changeCase",
        //   inputs: {
        //     TEXT: {
        //       shadow: {
        //         type: "text",
        //         fields: {
        //           TEXT: "abc",
        //         },
        //       },
        //     },
        //   },
        // },
        // {
        //   kind: "block",
        //   type: "text_trim",
        //   inputs: {
        //     TEXT: {
        //       shadow: {
        //         type: "text",
        //         fields: {
        //           TEXT: "abc",
        //         },
        //       },
        //     },
        //   },
        // },
        // {
        //   kind: "block",
        //   type: "text_count",
        //   inputs: {
        //     SUB: {
        //       shadow: {
        //         type: "text",
        //       },
        //     },
        //     TEXT: {
        //       shadow: {
        //         type: "text",
        //       },
        //     },
        //   },
        // },
        // {
        //   kind: "block",
        //   type: "text_replace",
        //   inputs: {
        //     FROM: {
        //       shadow: {
        //         type: "text",
        //       },
        //     },
        //     TO: {
        //       shadow: {
        //         type: "text",
        //       },
        //     },
        //     TEXT: {
        //       shadow: {
        //         type: "text",
        //       },
        //     },
        //   },
        // },
        // {
        //   kind: "block",
        //   type: "text_reverse",
        //   inputs: {
        //     TEXT: {
        //       shadow: {
        //         type: "text",
        //       },
        //     },
        //   },
        // },
      ],
    },
    {
      kind: "category",
      name: "Списки",
      categorystyle: "list_category",
      contents: [
        {
          kind: "block",
          type: "lists_create_with",
        },
        {
          kind: "block",
          type: "lists_repeat",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 5,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_length",
        },
        {
          kind: "block",
          type: "lists_isEmpty",
        },
        {
          kind: "block",
          type: "lists_indexOf",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_getIndex",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_setIndex",
          inputs: {
            LIST: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_getSublist",
          inputs: {
            LIST: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_split",
          inputs: {
            DELIM: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: ",",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_sort",
        },
        {
          kind: "block",
          type: "lists_reverse",
        },
        {
          kind: "block",
          type: "list_getkey",
        },
        { kind: "block", type: "shallow_copy" },
      ],
    },
    {
      kind: "sep",
    },
    {
      kind: "category",
      name: "CC: Base",
      categorystyle: "cc_category",
      contents: [
        {
          kind: "block",
          type: "sleep",
          inputs: {
            SEC: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 5,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "args",
        },
        {
          kind: "block",
          type: "get_arg",
        },
        {
          kind: "block",
          type: "get_arg_amount",
        },
        {
          kind: "block",
          type: "print",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "write",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "read",
        },
        {
          kind: "block",
          type: "read_replace",
          inputs: {
            CHAR: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "*",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "tostring",
        },
        {
          kind: "block",
          type: "tonumber",
        },
      ],
    },
    {
      kind: "category",
      name: "CC: Shell + OS",
      categorystyle: "cc_category",
      contents: [
        {
          kind: "block",
          type: "shell_resolve",
        },
      ],
    },
    {
      kind: "category",
      name: "CC: Turtle",
      categorystyle: "cc_category",
      contents: [
        {
          kind: "block",
          type: "turtle_move",
          inputs: {
            TIMES: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        { kind: "block", type: "turtle_select" },
        { kind: "block", type: "turtle_attack" },
        { kind: "block", type: "turtle_place" },
        { kind: "block", type: "turtle_dig" },
        { kind: "block", type: "turtle_detect" },
        { kind: "block", type: "turtle_compare" },
        { kind: "block", type: "turtle_drop" },
        { kind: "block", type: "turtle_compareto" },
        { kind: "block", type: "turtle_craft" },
        { kind: "block", type: "turtle_equip" },
        { kind: "block", type: "turtle_getfuellevel" },
        { kind: "block", type: "turtle_getfuellimit" },
        { kind: "block", type: "turtle_getitemdetail" },
        { kind: "block", type: "turtle_getitemdetail_detailed" },
        { kind: "block", type: "turtle_getselectedslot" },
        { kind: "block", type: "turtle_inspect" },
        { kind: "block", type: "turtle_refuel" },
        { kind: "block", type: "turtle_refuel_isfuel" },
        { kind: "block", type: "turtle_suck" },
        { kind: "block", type: "turtle_transferto" },
      ],
    },
    {
      kind: "category",
      name: "CC: fs",
      categorystyle: "cc_category",
      contents: [
        {
          kind: "block",
          type: "fs_open",
        },
        {
          kind: "block",
          type: "fs_close",
        },
        {
          kind: "block",
          type: "fs_seek",
          inputs: {
            OFFSET: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "fs_seek_pos",
        },
        {
          kind: "block",
          type: "fs_readall",
        },
        {
          kind: "block",
          type: "fs_readline",
        },
        { kind: "block", type: "fs_attributes" },
        { kind: "block", type: "fs_copy" },
        { kind: "block", type: "fs_delete" },
        { kind: "block", type: "fs_exists" },
        { kind: "block", type: "fs_getdrive" },
        { kind: "block", type: "fs_getfreespace" },
        { kind: "block", type: "fs_getcapacity" },
        { kind: "block", type: "fs_isdir" },
        { kind: "block", type: "fs_makedir" },
        { kind: "block", type: "fs_isreadonly" },
        { kind: "block", type: "fs_getsize" },
        { kind: "block", type: "fs_move" },
        { kind: "block", type: "fs_complete" },
        { kind: "block", type: "fs_combine" },
        { kind: "block", type: "fs_list" },
        { kind: "block", type: "fs_find" },
        { kind: "block", type: "fs_isdriveroot" },
      ],
    },
    {
      kind: "sep",
    },
    {
      kind: "category",
      name: "Variables",
      categorystyle: "variable_category",
      custom: "VARIABLE",
    },
    {
      kind: "category",
      name: "Functions",
      categorystyle: "procedure_category",
      custom: "PROCEDURE",
    },
  ],
};
