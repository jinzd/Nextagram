// import axios from "axios";
// import React from "react";

// class UserComments extends React.Component {
//   state = {
//     userComments: [],
//     userId: null
//   };

//   componentDidMount() {
//     const userId = this.props.userId;
//     // GET request to Nextagram API
//     // console.log(userId);
//     axios
//       .get(`https://insta.nextacademy.com/api/v1/images/${userId}/comments`)
//       .then(result => {
//         console.log(result);
//         // If successful, load users array with profile data
//         this.setState({
//           userComments: result.data,
//           userId: userId
//         });
//       })
//       .catch(error => {
//         // If unsuccessful, console log error
//         // console.log("ERROR: ", error);
//       });
//   }

//   render() {
//     // const { userComments } = this.state;

//     return (
//       <div>
//         {/* {userComments.map((comments, index) => (
//           <div key={index} className="col-sm-4 mb-2">
//             <p key={index}>{comments}></p>
//           </div>
//         ))}*/}{" "}
//         STATUSSSS
//       </div>
//     );
//   }
// }

// export default UserComments;
