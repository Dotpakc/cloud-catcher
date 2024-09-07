/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { Order } from "blockly/lua";

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock["sleep"] = function (block: any, generator: any) {
  const time = generator.valueToCode(block, "SEC", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `sleep(${time})\n`;
  return code;
};
forBlock["print"] = function (block: any, generator: any) {
  const text = generator.valueToCode(block, "TEXT", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `print(${text})\n`;
  return code;
};
forBlock["printerror"] = function (block: any, generator: any) {
  const text = generator.valueToCode(block, "TEXT", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `printError(${text})\n`;
  return code;
};
forBlock["write"] = function (block: any, generator: any) {
  const text = generator.valueToCode(block, "TEXT", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `write(${text})\n`;
  return code;
};
forBlock["read"] = function (_block: any, _generator: any) {
  // Generate the function call for this block.
  const code = `read()`;
  return code;
};
forBlock["read_completion"] = function (block: any, generator: any) {
  const text = generator.valueToCode(block, "TEXT", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `read(nil, nil, ${text})`;
  return code;
};
forBlock["read_replace"] = function (block: any, generator: any) {
  const text = generator.valueToCode(block, "CHAR", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `read(${text})`;
  return code;
};
forBlock["fs_open"] = function (block: any, generator: any) {
  const text = generator.valueToCode(block, "NAME", Order.NONE) || "''";
  const bytes = block.getFieldValue("ISBYTE") === "TRUE";
  let mode = block.getFieldValue("MODE");
  // Generate the function call for this block.
  if (bytes) mode = mode.slice(0, 1) + "b" + mode.slice(1);
  const code = `fs.open(${text},${mode})`;
  return [code, Order.NONE];
};
forBlock["fs_close"] = function (block: any, generator: any) {
  const text = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `${text}.close()\n`;
  return code;
};
forBlock["fs_read"] = function (block: any, generator: any) {
  const bytes = generator.valueToCode(block, "BYTE", Order.NONE) || "1";
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `${file}.read(${bytes == 1 ? "" : bytes})`;
  return [code, Order.NONE];
};
forBlock["fs_readall"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `${file}.readAll()`;
  return [code, Order.NONE];
};
forBlock["fs_readline"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `${file}.readLine()`;
  return [code, Order.NONE];
};
forBlock["shell_resolve"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "PATH", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `shell.resolve(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_seek"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE);
  const offset = generator.valueToCode(block, "OFFSET", Order.NONE);
  const mode = block.getFieldValue("MODE");
  // Generate the function call for this block.
  const code = `${file}.seek("${mode}",${offset})\n`;
  return code;
};
forBlock["fs_seek_pos"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE);
  // Generate the function call for this block.
  const code = `${file}.seek("cur")`;
  return [code, Order.NONE];
};
forBlock["tostring"] = function (block: any, generator: any) {
  const obj = generator.valueToCode(block, "OBJ", Order.NONE);
  // Generate the function call for this block.
  const code = `tostring(${obj})`;
  return [code, Order.NONE];
};
forBlock["tonumber"] = function (block: any, generator: any) {
  const obj = generator.valueToCode(block, "OBJ", Order.NONE);
  // Generate the function call for this block.
  const code = `tonumber(${obj})`;
  return [code, Order.NONE];
};
forBlock["fs_copy"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE);
  const dest = generator.valueToCode(block, "DEST", Order.NONE);
  // Generate the function call for this block.
  const code = `fs.copy("${file}",${dest})\n`;
  return code;
};
forBlock["fs_move"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE);
  const dest = generator.valueToCode(block, "DEST", Order.NONE);
  // Generate the function call for this block.
  const code = `fs.copy("${file}",${dest})\n`;
  return code;
};
forBlock["fs_list"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.list(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_delete"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE);
  // Generate the function call for this block.
  const code = `fs.delete("${file}")\n`;
  return code;
};
forBlock["fs_makedir"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "TEXT", Order.NONE);
  // Generate the function call for this block.
  const code = `fs.makedir("${file}")\n`;
  return code;
};
forBlock["fs_isdir"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.isDir(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_isreadonly"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.isReadOnly(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_getsize"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.getSize(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_getcapacity"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.getCapacity(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_getfreespace"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.getFreeSpace(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_attributes"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.attributes(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_exists"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.exists(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_complete"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  const dest = generator.valueToCode(block, "DEST", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.complete(${file},${dest})`;
  return [code, Order.NONE];
};
forBlock["fs_find"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.find(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_getdrive"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.getDrive(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_isdriveroot"] = function (block: any, generator: any) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.isDriveRoot(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_combine"] = function (block: any, generator: any) {
  const files = generator.valueToCode(block, "PATHS", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.combine(unpack(${files}))`;
  return [code, Order.NONE];
};
forBlock["list_getkey"] = function (block: any, generator: any) {
  const table = generator.valueToCode(block, "TABLE", Order.NONE) || "{}";
  const key = generator.valueToCode(block, "KEY", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `${table}[${key}]`;
  return [code, Order.NONE];
};
forBlock["turtle_move"] = function (block: any, generator: any) {
  const dir = block.getFieldValue("DIR");
  const times = generator.valueToCode(block, "TIMES", Order.NONE) || "";
  return `${times > 1 ? `for i=1,${times} do ` : ""}turtle.${dir}()${
    times > 1 ? " end" : ""
  }\n`;
};
forBlock["turtle_attack"] = function (block: any, _generator: any) {
  const dir = block.getFieldValue("DIR");
  return `turtle.attack${dir}()\n`;
};
forBlock["turtle_dig"] = function (block: any, _generator: any) {
  const dir = block.getFieldValue("DIR");
  return `turtle.dig${dir}()\n`;
};
forBlock["turtle_place"] = function (block: any, _generator: any) {
  const dir = block.getFieldValue("DIR");
  return `turtle.place${dir}()\n`;
};
forBlock["turtle_compare"] = function (block: any, _generator: any) {
  const dir = block.getFieldValue("DIR");
  return [`turtle.compare${dir}()`, Order.NONE];
};
forBlock["turtle_drop"] = function (block: any, generator: any) {
  const dir = block.getFieldValue("DIR");
  const times = generator.valueToCode(block, "TIMES", Order.NONE) || "";
  return `turtle.drop${dir}(${times})\n`;
};
forBlock["turtle_equip"] = function (block: any, _generator: any) {
  const dir = block.getFieldValue("DIR");
  return `turtle.equip${dir}()\n`;
};
forBlock["turtle_detect"] = function (block: any, _generator: any) {
  const dir = block.getFieldValue("DIR");
  return [`turtle.detect${dir}()`, Order.NONE];
};
forBlock["turtle_suck"] = function (block: any, _generator: any) {
  const dir = block.getFieldValue("DIR");
  return `turtle.suck${dir}()\n`;
};
forBlock["turtle_inspect"] = function (block: any, _generator: any) {
  const dir = block.getFieldValue("DIR");
  return [`{turtle.inspect${dir}()}`, Order.NONE];
};
forBlock["turtle_craft"] = function (block: any, generator: any) {
  const num = generator.valueToCode(block, "NUM", Order.NONE) || "64";
  return `turtle.craft(${num})\n`;
};
forBlock["turtle_compareto"] = function (block: any, generator: any) {
  const slot = generator.valueToCode(block, "SLOT", Order.NONE) || "";
  return [`turtle.compareTo(${slot})`, Order.NONE];
};
forBlock["turtle_transferto"] = function (block: any, generator: any) {
  const slot = generator.valueToCode(block, "SLOT", Order.NONE) || "";
  return `turtle.transferTo(${slot})\n`;
};
forBlock["turtle_getfuellevel"] = function (_block: any, _generator: any) {
  return [`turtle.getFuelLevel()`, Order.NONE];
};
forBlock["turtle_getfuellimit"] = function (_block: any, _generator: any) {
  return [`turtle.getFuelLimit()`, Order.NONE];
};
forBlock["turtle_getitemdetail"] = function (block: any, generator: any) {
  const slot = generator.valueToCode(block, "SLOT", Order.NONE) || "";
  return [`turtle.getItemDetail(${slot > 0 ? slot : ""})`, Order.NONE];
};
forBlock["turtle_getitemdetail_detailed"] = function (block: any, generator: any) {
  const slot = generator.valueToCode(block, "SLOT", Order.NONE) || "";
  return [
    `turtle.getItemDetail(${slot > 0 ? slot + "," : ""},true)`,
    Order.NONE,
  ];
};
forBlock["turtle_getselectedslot"] = function (_block: any, _generator: any) {
  return [`turtle.getSelectedSlot()`, Order.NONE];
};
forBlock["turtle_refuel_isfuel"] = function (_block: any, _generator: any) {
  return [`turtle.refuel(0)`, Order.NONE];
};
forBlock["turtle_refuel"] = function (block: any, generator: any) {
  const num = generator.valueToCode(block, "NUM", Order.NONE) || "64";
  return `turtle.refuel(${num})\n`;
};
forBlock["turtle_select"] = function (block: any, generator: any) {
  const num = generator.valueToCode(block, "NUM", Order.NONE) || "1";
  return `turtle.select(${num})\n`;
};
forBlock["shallow_copy"] = function (block: any, generator: any) {
    const shallowCopy = generator.provideFunction_(
      "shallow_copy",
      `function ${generator.FUNCTION_NAME_PLACEHOLDER_}
    local t2 = {}
    for k,v in pairs(t) do
      t2[k] = v
    end
    return t2
  end
  `
    );
    const table = generator.valueToCode(block, "TABLE", Order.NONE) || "1";
  return [`${shallowCopy}(${table})`, Order.NONE];
};
forBlock["get_arg"] = function (block: any, generator: any) {
  const num = generator.valueToCode(block, "NUM", Order.NONE) || "1";
  return [`args[${num}]`, Order.NONE];
};
forBlock["args"] = function (_block: any, _generator: any) {
  return [`args`, Order.NONE];
};
forBlock["get_arg_amount"] = function (_block: any, _generator: any) {
  return [`#args`, Order.NONE];
};
