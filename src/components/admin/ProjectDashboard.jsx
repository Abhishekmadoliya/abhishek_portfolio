import React, { useState, useEffect } from "react";

const ProjectDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", image: "", link: "" });
  const [editIndex, setEditIndex] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(savedProjects);
  }, []);

  // Save to localStorage whenever projects change
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updated = [...projects];
      updated[editIndex] = form;
      setProjects(updated);
      setEditIndex(null);
    } else {
      setProjects([...projects, form]);
    }
    setForm({ title: "", description: "", image: "", link: "" });
  };

  const handleEdit = (index) => {
    setForm(projects[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">📌 Projects Dashboard</h1>

      {/* Form */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">{editIndex !== null ? "Edit Project" : "Add Project"}</h2>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Project Title"
          className="w-full mb-3 p-2 rounded bg-gray-700 text-white"
        />
        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Project Description"
          className="w-full mb-3 p-2 rounded bg-gray-700 text-white"
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full mb-3 p-2 rounded bg-gray-700 text-white"
        />
        <input
          name="link"
          value={form.link}
          onChange={handleChange}
          placeholder="Project Link"
          className="w-full mb-3 p-2 rounded bg-gray-700 text-white"
        />

        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          {editIndex !== null ? "Update Project" : "Add Project"}
        </button>
      </div>

      {/* Project List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-xl shadow-lg">
            <img src={proj.image} alt={proj.title} className="w-full h-40 object-cover rounded mb-3" />
            <h3 className="text-lg font-semibold">{proj.title}</h3>
            <p className="text-gray-400">{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noreferrer" className="text-blue-400 underline">
              Visit
            </a>
            <div className="flex gap-2 mt-3">
              <button onClick={() => handleEdit(index)} className="px-3 py-1 bg-yellow-500 rounded hover:bg-yellow-600">
                Edit
              </button>
              <button onClick={() => handleDelete(index)} className="px-3 py-1 bg-red-500 rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDashboard;
