import React from "react";

interface FeatureCardProps {
  title: string;
  description: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({  title, description }) => {
  return (
    <div className="rounded-2xl shadow-lg bg-white p-8">
      <div className="text-center">
        <h5 className="text-2xl text-blue-gray-700 mb-2">{title}</h5>
        <p className="text-blue-gray-600">{description}</p>
      </div>
    </div>
  );
};



export default FeatureCard;
