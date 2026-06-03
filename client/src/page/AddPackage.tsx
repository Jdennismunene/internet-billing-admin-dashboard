import {  useState } from "react";

interface Package {
  id: number;
  image: string;
  plan: string;
  type: string;
  speed: string;
  price: string;
}

interface AddPackageProps {
  onClose: () => void;
  onSave: (pkg: Package) => void;
}

function AddPackage({
  onClose,
  onSave,
}: AddPackageProps) {
  const [image, setImage] = useState("");
  const [plan, setPlan] = useState("Monthly");
  const [type, setType] = useState("");
  const [speed, setSpeed] = useState("");
  const [price, setPrice] = useState("");

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleSave = () => {
    if (
      !image ||
      !type ||
      !speed ||
      !price
    ) {
      alert("Please fill all fields");
      return;
    }

    onSave({
      id: Date.now(),
      image,
      plan,
      type,
      speed,
      price,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl">
        {/* Header */}
        <div className="border-b p-5">
          <h2 className="text-2xl font-bold">
            Add New Package
          </h2>
        </div>

        {/* Form */}
        <div className="p-5 space-y-4">

          <div>
            <label className="font-medium">
              Package Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full border rounded-lg p-2 mt-2"
            />

            {image && (
              <img
                src={image}
                alt="preview"
                className="mt-3 h-36 w-full object-cover rounded-lg"
              />
            )}
          </div>

          <div>
            <label className="font-medium">
              Package Plan
            </label>

            <select
              value={plan}
              onChange={(e) =>
                setPlan(e.target.value)
              }
              className="w-full border rounded-lg p-3 mt-2"
            >
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
              <option>Hourly</option>
            </select>
          </div>

          <div>
            <label className="font-medium">
              Package Name
            </label>

            <input
              type="text"
              placeholder="Gold"
              value={type}
              onChange={(e) =>
                setType(e.target.value)
              }
              className="w-full border rounded-lg p-3 mt-2"
            />
          </div>

          <div>
            <label className="font-medium">
              Internet Speed
            </label>

            <input
              type="text"
              placeholder="20 Mbps"
              value={speed}
              onChange={(e) =>
                setSpeed(e.target.value)
              }
              className="w-full border rounded-lg p-3 mt-2"
            />
          </div>

          <div>
            <label className="font-medium">
              Package Price
            </label>

            <input
              type="text"
              placeholder="KES 2500"
              value={price}
              onChange={(e) =>
                setPrice(e.target.value)
              }
              className="w-full border rounded-lg p-3 mt-2"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-5 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 border rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            Save Package
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPackage;