import { formatDate, getColumnByIndex as columByIndex, isDate } from "../../../utils"

export const Table = ({titles, dataSource}) => {
  let row = 0
  return (
    <table className="table">
      <thead>
        <tr>
          {
            titles.map(title => (
              <th scope="col" key={title}>{title}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          dataSource.map(
            object => {
              let column = 0
              return <tr key={row++}>
              {
                titles.map(() => (
                  <td scope="row" key={column}>{isDate(columByIndex(object, column))? formatDate(columByIndex(object, column++), "dd/MM/yyyy hh:mm") : columByIndex(object, column++)}</td>
                ))
              }
              </tr>
            }
          )
        }
      </tbody>
    </table>
  )
}