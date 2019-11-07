// import React from 'react'

// // may be yaml or something else
// let propertyList = [
//   {
//       propertyName: 'url',
//       propertyType: 'String',
//       propertyDescription: 'URL of the shared link.'
//   },
//   {
//       propertyName: 'path',
//       propertyType: 'String(pattern="/(.|[\r\n])*")',
//       propertyDescription: 'If the shared link is to a folder, this parameter can be used to retrieve the metadata for a specific file or sub-folder in this folder. A relative path should be used. This field is optional.'
//   },
//   {
//       propertyName: 'link_password',
//       propertyType: 'String',
//       propertyDescription: 'If the shared link has a password, this parameter can be used. This field is optional.'
//   }
// ]

// class Table extends Component {
//    constructor(props) {
//       super(props)
//          this.state = propertyList
//       }
//    }

//    // renderTable() {
//    //    return propertyList.map((property, index) => {
//    //       const { propertyName, propertyType, propertyDescription } = property
//    //       return (
//    //          <tr key={index}>
//    //             <td>{propertyName}</td>
//    //             <td>{propertyType}</td>
//    //             <td>{propertyDescription}</td>
//    //          </tr>
//    //       )
//    //    })
//    // }
//    render() {
//       return (
//          <table>
//             <tbody>
//                <tr>
//                   <th>Property</th>
//                   <th>Type</th>
//                   <th>Description</th>
//                </tr>
//                {renderTable()}
//             </tbody>
//          </table>
//       )
//    }
// }

// export default Table //exporting a component make it reusa