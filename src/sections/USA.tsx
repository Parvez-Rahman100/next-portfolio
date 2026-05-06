'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function USA() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    '/USA/1.jpg',
    '/USA/2.png',
    '/USA/3.png',
    '/USA/4.png',
    '/USA/5.png',
    '/USA/6.png',
    '/USA/7.png',
    '/USA/8.png',
    '/USA/9.png',
    '/USA/10.png',
    '/USA/11.png',
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "3rem",
        color: "#ffffff",
        backgroundColor: "#000000",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Back to Home Button */}
        <div style={{ marginBottom: "2rem", textAlign: "center" }}>
          <Link href="/">
            <button
              style={{
                backgroundColor: "#c8c414",
                color: "#000000",
                border: "none",
                padding: "12px 24px",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#a8a414";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#c8c414";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
              }}
            >
              ← Back to Home
            </button>
          </Link>
        </div>

        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          marginBottom: "2rem",
          textAlign: "center"
        }}>
          USA Gallery
        </h1>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          padding: "1rem"
        }}>
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: "100%",
                height: "250px",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
              onClick={() => openModal(image)}
            >
              <Image
                src={image}
                alt={`USA Image ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "2rem",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: "8px",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Selected USA Image"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "90vh",
                objectFit: "contain"
              }}
            />

            {/* Close button */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
