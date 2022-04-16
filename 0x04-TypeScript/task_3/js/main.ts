import { RowID, RowElement } from "./interface"
import * as CRUD from "./crud"

let row: RowElement = {
  firstName: "Tom",
  lastName: "Edd",
}

const newRowID: RowID = CRUD.insertRow(row)
const updatedRow: RowElement = {
  firstName: "Marie",
  lastName: "Currie",
  age: 20,
}

CRUD.updateRow(newRowID, updatedRow)
CRUD.deleteRow(newRowID)