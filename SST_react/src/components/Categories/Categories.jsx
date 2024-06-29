// import { useState, useEffect } from "react";

// function Categories({ onSelectCategory }) {
//   const [categories, setCategories] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch("https://667d9edc297972455f65d371.mockapi.io/api/v1/categories/")
//       .then((response) => response.json())
//       .then((res) => setCategories(res));
//   }, []);
//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
//         <h1 style={{ textAlign: "center", fontWeight: "bold" }}>Category</h1>
//         <input
//           type="text"
//           placeholder="Search categories..."
//           value={searchTerm}
//           onChange={(event) => setSearchTerm(event.target.value)}
//           style={{ padding: "10px", width: "30%" }}
//         />
//       </div>
//       <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", }}>
//         {categories.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.name.toLowerCase() === searchTerm.toLowerCase()).map((item, index) => (
//           <h4
//             onClick={() => onSelectCategory(item.name)}
//             key={index}
//             style={{ cursor: "pointer", margin: "10px", padding: "15px", borderRadius: "5px", boxShadow: "0px 0px 5px #ccc", transition: "background-color 0.3s" }}
//           >
//             {item.name}
//           </h4>
//         ))}
//       </div>
//     </div>
//   );
//}
//   return (
//     <div>
//       <h1 style={{ textAlign: "center" }}>Category</h1>
//       <input
//         type="text"
//         placeholder="Search categories..."
//         value={searchTerm}
//         onChange={(event) => setSearchTerm(event.target.value)}
//         style={{ marginBottom: "10px", padding: "5px", width: "30%" }}
//       />
//       <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
//         {categories.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map((item, index) => (
//           <h4
//             onClick={() => onSelectCategory(item.name)}
//             key={index}
//             style={{ cursor: "pointer", margin: "10px", padding: "5px", borderRadius: "5px", transition: "background-color 0.3s", ":hover": { backgroundColor: "#f0f0f0" } }}
//           >
//             {item.name}
//           </h4>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";

function Categories({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("https://667d9edc297972455f65d371.mockapi.io/api/v1/categories/")
      .then((response) => response.json())
      .then((res) => setCategories(res));
  }, []);

  // Function to handle the enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Find a category that closely matches the search term
      const matchedCategory = categories.find(category => category.name.toLowerCase().includes(searchTerm.toLowerCase()));
      if (matchedCategory) {
        onSelectCategory(matchedCategory.name);
      }
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
        <h1 style={{ textAlign: "center" }}>Category</h1>
        <input
          type="text"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyPress={handleKeyPress} 
          style={{ padding: "15px", width: "30%", borderRadius: "20px", border: "2px solid #ccc" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
        {categories.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.name.toLowerCase() === searchTerm.toLowerCase()).map((item, index) => (
          <h4
            onClick={() => onSelectCategory(item.name)}
            key={index}
            style={{ cursor: "pointer", margin: "10px", padding: "15px", borderRadius: "5px", boxShadow: "0px 0px 5px #ccc", transition: "background-color 0.3s" }}
          >
            {item.name}
          </h4>
        ))}
      </div>
    </div>
  );
}
export default Categories;