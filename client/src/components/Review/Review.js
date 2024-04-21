// import "./styles.css";
// import { useState } from "react";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";

// export default function Review() {
//   const [number, setNumber] = useState(0);
//   const [hoverStar, setHoverStar] = useState(undefined);

//   const handleText = () => {
//     switch (number || hoverStar) {
//       case 0:
//         return "Rate the Product";
//       case 1:
//         return "Hated";
//       case 2:
//         return "Unsatisfied";
//       case 3:
//         return "Normal";
//       case 4:
//         return "Satisfied";
//       case 5:
//         return "Loved";
//       default:
//         return "Rate the Product";
//     }
//   };

//   const handlePlaceHolder = () => {
//     switch (number || hoverStar) {
//       case 0:
//         return "Add a review";
//       case 1:
//       case 2:
//       case 3:
//       case 4:
//       case 5:
//       default:
//         return "Add a review";
//     }
//   };
//   return (
//     <div className="Review">
//       <div className="popup">
//         <div className="content">
//           <div className="product">
//             <img
//               style={{ width: 60, height: 60, objectFit: "cover" }}
//               src="https://tanhungphatit.vn/images/detailed/93/iphone-13-blue-1-600x600.jpg"
//               alt="name"
//             />
//             <h1>Iphone 13</h1>
//           </div>
//           <div>
//             <h1>{handleText()}</h1>
//             {Array(5)
//               .fill()
//               .map((_, index) =>
//                 number >= index + 1 || hoverStar >= index + 1 ? (
//                   <AiFillStar
//                     onMouseOver={() => !number && setHoverStar(index + 1)}
//                     onMouseLeave={() => setHoverStar(undefined)}
//                     style={{ color: "orange" }}
//                     onClick={() => setNumber(index + 1)}
//                   />
//                 ) : (
//                   <AiOutlineStar
//                     onMouseOver={() => !number && setHoverStar(index + 1)}
//                     onMouseLeave={() => setHoverStar(undefined)}
//                     style={{ color: "orange" }}
//                     onClick={() => setNumber(index + 1)}
//                   />
//                 )
//               )}
//           </div>
//           <textarea placeholder={handlePlaceHolder()}></textarea>
//           <button className={` ${!number && "disabled"} `}>Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import { FaArrowLeft } from "react-icons/fa";
// // import "./styles.css";

// export default function Review({ onClose }) {
//   const [number, setNumber] = useState(0);
//   const [hoverStar, setHoverStar] = useState(undefined);

//   const handleText = () => {
//     switch (number || hoverStar) {
//       case 0:
//         return "Rate the Product";
//       case 1:
//         return "Hated";
//       case 2:
//         return "Unsatisfied";
//       case 3:
//         return "Normal";
//       case 4:
//         return "Satisfied";
//       case 5:
//         return "Loved";
//       default:
//         return "Rate the Product";
//     }
//   };

//   const handlePlaceHolder = () => {
//     switch (number || hoverStar) {
//       case 0:
//         return "Add a review";
//       case 1:
//       case 2:
//       case 3:
//       case 4:
//       case 5:
//       default:
//         return "Add a review";
//     }
//   };

//   return (
//     <div className="Review">
//       <div className="popup">
//         <div className="content">
//           <button className="back-btn" onClick={onClose}>
//             <FaArrowLeft />
//           </button>
//           <div className="product">
//             <img
//               style={{ width: 60, height: 60, objectFit: "cover" }}
//               src="https://tanhungphatit.vn/images/detailed/93/iphone-13-blue-1-600x600.jpg"
//               alt="name"
//             />
//             <h1>Iphone 13</h1>
//           </div>
//           <div>
//             <h1>{handleText()}</h1>
//             {Array(5)
//               .fill()
//               .map((_, index) =>
//                 number >= index + 1 || hoverStar >= index + 1 ? (
//                   <AiFillStar
//                     onMouseOver={() => !number && setHoverStar(index + 1)}
//                     onMouseLeave={() => setHoverStar(undefined)}
//                     style={{ color: "orange" }}
//                     onClick={() => setNumber(index + 1)}
//                   />
//                 ) : (
//                   <AiOutlineStar
//                     onMouseOver={() => !number && setHoverStar(index + 1)}
//                     onMouseLeave={() => setHoverStar(undefined)}
//                     style={{ color: "orange" }}
//                     onClick={() => setNumber(index + 1)}
//                   />
//                 )
//               )}
//           </div>
//           <textarea placeholder={handlePlaceHolder()}></textarea>
//           <button className={` ${!number && "disabled"} `}>Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";

export default function Review({ onClose }) {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);

  const handleText = () => {
    switch (number || hoverStar) {
      case 0:
        return "Rate the Product";
      case 1:
        return "Hated";
      case 2:
        return "Unsatisfied";
      case 3:
        return "Normal";
      case 4:
        return "Satisfied";
      case 5:
        return "Loved";
      default:
        return "Rate the Product";
    }
  };

  const handlePlaceHolder = () => {
    switch (number || hoverStar) {
      case 0:
        return "Add a review";
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      default:
        return "Add a review";
    }
  };

  return (
    <div className="Review">
      <style>
        {`
          .popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .product {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
          }

          .product img {
            width: 60px;
            height: 60px;
            object-fit: cover;
            margin-right: 10px;
          }

          h1 {
            margin: 0;
          }

          textarea {
            width: 100%;
            height: 100px;
            margin-bottom: 20px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            resize: none;
          }

          .disabled {
            pointer-events: none;
            opacity: 0.5;
          }

          .back-btn {
            position: absolute;
            top: 10px;
            left: 10px;
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            color: #333;
          }
        `}
      </style>
      <div className="popup">
        <button className="back-btn" onClick={onClose}>
          <FaArrowLeft />
        </button>
        <div className="content">
          <div className="product">
            <img
              src="https://tanhungphatit.vn/images/detailed/93/iphone-13-blue-1-600x600.jpg"
              alt="name"
            />
            <h1>Iphone 13</h1>
          </div>
          <h1>{handleText()}</h1>
          {Array(5)
            .fill()
            .map((_, index) =>
              number >= index + 1 || hoverStar >= index + 1 ? (
                <AiFillStar
                  onMouseOver={() => !number && setHoverStar(index + 1)}
                  onMouseLeave={() => setHoverStar(undefined)}
                  style={{ color: "orange" }}
                  onClick={() => setNumber(index + 1)}
                />
              ) : (
                <AiOutlineStar
                  onMouseOver={() => !number && setHoverStar(index + 1)}
                  onMouseLeave={() => setHoverStar(undefined)}
                  style={{ color: "orange" }}
                  onClick={() => setNumber(index + 1)}
                />
              )
            )}
          <textarea placeholder={handlePlaceHolder()}></textarea>
          <button className={` ${!number && "disabled"} `}>Submit</button>
        </div>
      </div>
    </div>
  );
}
