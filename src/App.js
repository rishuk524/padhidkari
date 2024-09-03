import React, { useState } from "react";
import ProfileCard from "./Componet/Card";

function App() {
  const profiles = [
    {
      name: 'Virat',
      details: ['Delhi', 'Delhi', 'xyz', 'MLA'],
      imageUrl: 'https://i.pinimg.com/236x/d8/20/95/d8209588924377a85965e305401e924d.jpg'  // Example URL
    },
    {
      name: 'Sanjay',
      details: ['mah', 'mumbai', 'borivali', 'pramukh'],
      imageUrl: 'https://i.pinimg.com/236x/d8/20/95/d8209588924377a85965e305401e924d.jpg'  // Example URL
    },
    {
      name: 'Virat',
      details: ['Delhi', 'Delhi', 'xyz', 'MLA'],
      imageUrl: 'https://i.pinimg.com/236x/d8/20/95/d8209588924377a85965e305401e924d.jpg'  // Example URL
    },
    {
      name: 'Sanjay',
      details: ['mah', 'mumbai', 'borivali', 'pramukh'],
      imageUrl: 'https://i.pinimg.com/236x/d8/20/95/d8209588924377a85965e305401e924d.jpg'  // Example URL
    },
    {
      name: 'Virat',
      details: ['Delhi', 'Delhi', 'xyz', 'MLA'],
      imageUrl: 'https://i.pinimg.com/236x/d8/20/95/d8209588924377a85965e305401e924d.jpg'  // Example URL
    },
    {
      name: 'Sanjay',
      details: ['mah', 'mumbai', 'borivali', 'pramukh'],
      imageUrl: 'https://i.pinimg.com/236x/d8/20/95/d8209588924377a85965e305401e924d.jpg'  // Example URL
    },
    // Other profiles...
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="lg:flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto px-4 w-full max-w-6xl">
        {/* Search Bar */}
        <div className="mb-6 flex items-center bg-white rounded-full shadow-sm">
          <svg className="w-6 h-6 ml-3 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.71 20.29l-3.4-3.39a9 9 0 10-1.42 1.42l3.39 3.4a1 1 0 001.42-1.42zM10 18a8 8 0 118-8 8 8 0 01-8 8z"/>
          </svg>
          <input
            type="text"
            placeholder="Padh Aadhikari..."
            className="w-full p-3 rounded-full focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {filteredProfiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
