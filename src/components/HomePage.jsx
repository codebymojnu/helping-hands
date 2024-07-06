// src/HomePage.jsx
import React from 'react';

const images = [
    { name: "Baba", src: "/HelpingPersons/baba.jpg" },
    { name: "Arafat Islam", src: "/HelpingPersons/image1.jpg" },
    {name: "Nakib Aman", src: "/HelpingPersons/image1.jpg"},
    { name: "Abdur Rahim", src: "/HelpingPersons/image2.jpg" },
    { name: "Subir Saha", src: "/HelpingPersons/image3.jpg" },
    { name: "Unus Ali", src: "/HelpingPersons/image4.jpg" },
    { name: "", src: "/HelpingPersons/image4.jpg" },
   
    // Add more images with similar structure
];

const HomePage = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="text-center bg-blue-100 p-8 rounded-lg shadow-md mb-8">
                <h1 className="text-4xl font-bold mb-4">Words: Mojnu Miah</h1>
                <p className="text-lg">
                I will not write any more <span className="bg-red-100">stories of failure</span> in my life. More than 1K people help me. For reason: I promise to all-- "I want to tell stories of success".
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 gap-2">
                {images.map((image, index) => (
                    <div key={index} className="flex flex-col items-center justify-center">
                        <img 
                            className="w-20 h-20 object-cover rounded-full" 
                            src={image.src} 
                            alt={image.name} 
                        />
                        <p className="text-center mt-2">{image.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
