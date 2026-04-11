// import { useSelector } from "react-redux";

// export default function Courses() {
//   const { courses } = useSelector((state) => state.course);

//   return (
//     <div className="p-6 grid md:grid-cols-3 gap-4">
//       {courses.map((course) => (
//         <div key={course.id} className="border p-4 rounded shadow">
//           <h2 className="font-bold text-lg">{course.name}</h2>
//           <button
//             disabled={course.status === "Closed"}
//             className={`mt-3 px-4 py-2 rounded ${
//               course.status === "Closed"
//                 ? "bg-gray-400"
//                 : "bg-green-600 text-white"
//             }`}
//           >
//             {course.status === "Closed" ? "Admissions Closed" : "Apply"}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }


// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCourses } from "../Redux/Features/courseSlice";
// import Navbar from "../Components/Navbar";

// export default function Courses() {
//   const dispatch = useDispatch();
//   const { courses } = useSelector((state) => state.course);

//   useEffect(() => {
//     dispatch(fetchCourses());
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="p-8 grid md:grid-cols-3 gap-6">
        
//         {courses.map((course) => (
//           <div
//             key={course.id}
//             className="bg-white shadow p-6 rounded"
//           >
//             <h2 className="text-xl font-bold">
//               {course.name}
//             </h2>
//             <p className="my-2">{course.description}</p>

//             {course.status === "open" ? (
//               <button className="bg-green-600 text-white px-4 py-2 rounded">
//                 Apply
//               </button>
//             ) : (
//               <button className="bg-gray-400 text-white px-4 py-2 rounded">
//                 Closed
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../Redux/Features/courseSlice";
// import Navbar from "../Components/Navbar";

export default function Courses() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <>
      {/* <Navbar /> */}

      <div className="p-8 grid md:grid-cols-3 gap-6">

        {/* اگر data load نہیں ہوا */}
        {!courses && <p>Loading...</p>}

        {/* اگر courses empty ہیں */}
        {courses && courses.length === 0 && (
          <p>No Courses Found</p>
        )}

        {/* اگر courses موجود ہیں */}
        {courses && courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow p-6 rounded"
          >
            <h2 className="text-xl font-bold">
              {course.name}
            </h2>

            <p className="my-2">
              {course.description}
            </p>

            {course.status === "open" ? (
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Apply
              </button>
            ) : (
              <button className="bg-gray-400 text-white px-4 py-2 rounded">
                Closed
              </button>
            )}
          </div>
        ))}

      </div>
    </>
  );
}