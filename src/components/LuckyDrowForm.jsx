




// import React from "react";
// import { useForm } from "react-hook-form";
// import "../styles/LuckyDrowForm.css";
// import image from "../utils/porche.png";

// const LuckDrowForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const response = await fetch("https://overdrive-server.onrender.com/api/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();
//       alert(result.message);
//     } catch (error) {
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div className="lucky-bg" style={{ backgroundImage: `url(${image})` }}>
//       <div className="lucky-form-box">
//         <h2>Registration Form</h2>

//         <form onSubmit={handleSubmit(onSubmit)}>

//           <label>Name</label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             {...register("name", { required: "Name is required" })}
//           />
//           {errors.name && <p className="error">{errors.name.message}</p>}

//           <label>Phone Number</label>
//           <input
//             type="text"
//             placeholder="Enter 10 digit phone number"
//             {...register("phone", {
//               required: "Phone number is required",
//               pattern: {
//                 value: /^[0-9]{10}$/,
//                 message: "Phone number must be exactly 10 digits",
//               },
//             })}
//           />
//           {errors.phone && <p className="error">{errors.phone.message}</p>}

//           <label>Address</label>
//           <input
//             type="text"
//             placeholder="Enter your address"
//             {...register("adress", { required: "Address is required" })}
//           />

//           <button  type="submit">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LuckDrowForm;




import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/LuckyDrowForm.css";
import image from "../utils/porche.png";

const LuckDrowForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("https://overdrive-server.onrender.com/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      alert(result.message);

      // Reset form after success
      reset();
    } catch (error) {
      alert("Something went wrong");
    }
    setLoading(false);
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
          {errors.adress && <p className="error">{errors.adress.message}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LuckDrowForm;
