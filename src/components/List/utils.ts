/*
 * @File: utils.js
 * @Project: vue-scffold
 * @File Created: Sunday, 2nd February 2020 8:35:34 pm
 * @Author: NARUTOne (wznaruto326@163.com/wznarutone326@gamil.com)
 * -----
 * @Last Modified: Sunday, 2nd February 2020 8:35:55 pm
 * @Modified By: NARUTOne (wznaruto326@163.com/wznarutone326@gamil.com>)
 * -----
 * @Copyright <<projectCreationYear>> - 2020 ***, ***
 * @fighting: code is far away from bug with the animal protecting
 *  ┏┓      ┏┓
 *  ┏┛┻━━━┛┻┓
 *  |           |
 *  |     ━    |
 *  |  ┳┛ ┗┳ |
 *  |          |
 *  |     ┻   |
 *  |           |
 *  ┗━┓     ┏━┛
 *     |      | 神兽保佑 🚀🚀🚀
 *     |      | 代码无BUG！！！
 *     |      ┗━━━┓
 *     |            ┣┓
 *     |            ┏┛
 *     ┗┓┓ ┏━┳┓┏┛
 *      |┫┫   |┫┫
 *      ┗┻┛   ┗┻┛
 */

import { IGridTypes, ColumnType } from "./types";

export function getGrid(grid: IGridTypes, t: ColumnType): number | undefined {
  return grid[t] && Math.floor(24 / grid[t]!);
}