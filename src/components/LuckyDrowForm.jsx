// import React from "react";
// import { useForm } from "react-hook-form";
// import "../styles/LuckyDrowForm.css"; // Assuming you have some CSS for styling
// import image from '../utils/image.png';
// const LuckDrowForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//   try {
//     const response = await fetch("http://localhost:5000/api/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();
//     alert(result.message);
//   } catch (error) {
//     alert("Something went wrong");
//   }
// };


//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Registration Form</h2>

//       <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
//         {/* Name */}
//         <label style={styles.label}>Name</label>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           {...register("name", { required: "Name is required" })}
//           style={styles.input}
//         />
//         {errors.name && <p style={styles.error}>{errors.name.message}</p>}

//         {/* Phone Number */}
//         <label style={styles.label}>Phone Number</label>
//         <input
//           type="text"
//           placeholder="Enter 10 digit phone number"
//           {...register("phone", {
//             required: "Phone number is required",
//             pattern: {
//               value: /^[0-9]{10}$/,
//               message: "Phone number must be exactly 10 digits",
//             },
//           })}
//           style={styles.input}
//         />
//         {errors.phone && <p style={styles.error}>{errors.phone.message}</p>}

//          {/* Name */}
//         <label style={styles.label}>Adress</label>
//         <input
//           type="text"
//           placeholder="Enter your Adress"
//           {...register("adress", { required: "Adress is required" })}
//           style={styles.input}
//         />

//         <button type="submit" style={styles.button}>Register</button>
//       </form>
//     </div>
//   );
// };

// // Inline styling (you can convert to CSS)
// const styles = {
//   container: {
//     width: "350px",
//     margin: "50px auto",
//     padding: "20px",
//     borderRadius: "10px",
//     backgroundColor: "#f9f9f9",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//     fontFamily: "Arial",
//   },
//   heading: {
//     textAlign: "center",
//     marginBottom: "20px",
//     color: "#333",
//   },
//   form: { display: "flex", flexDirection: "column" },
//   label: { fontSize: "14px", marginBottom: "5px" },
//   input: {
//     padding: "10px",
//     marginBottom: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//   },
//   error: { color: "red", fontSize: "12px", marginBottom: "10px" },
//   button: {
//     padding: "10px",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };

// export default LuckDrowForm;




import React from "react";
import { useForm } from "react-hook-form";
import "../styles/LuckyDrowForm.css";
import image from "../utils/porche.png";

const LuckDrowForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="lucky-bg" style={{ backgroundImage: `url(${image})` }}>
      <div className="lucky-form-box">
        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}

          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Enter 10 digit phone number"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be exactly 10 digits",
              },
            })}
          />
          {errors.phone && <p className="error">{errors.phone.message}</p>}

          <label>Address</label>
          <input
            type="text"
            placeholder="Enter your address"
            {...register("adress", { required: "Address is required" })}
          />

          <button  type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default LuckDrowForm;
