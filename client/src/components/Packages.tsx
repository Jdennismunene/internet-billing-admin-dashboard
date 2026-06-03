import { useState } from "react";
import AddPackage from "../page/AddPackage";

interface Package {
  id: number;
  image: string;
  plan: string;
  type: string;
  speed: string;
  price: string;
}

function Packages() {
  const [showModal, setShowModal] = useState(false);

  const [packages, setPackages] = useState<Package[]>([]);

  const handleAddPackage = (newPackage: Package) => {
    setPackages((prev) => [...prev, newPackage]);
  };

  const monthlyPackages = packages.filter(
    (pkg) => pkg.plan === "Monthly"
  );

  const weeklyPackages = packages.filter(
    (pkg) => pkg.plan === "Weekly"
  );

  const dailyPackages = packages.filter(
    (pkg) => pkg.plan === "Daily"
  );

  const hourlyPackages = packages.filter(
    (pkg) => pkg.plan === "Hourly"
  );

  return (
    <>
      <section
        className={`p-4 transition-all duration-300 ${
          showModal ? "blur-sm pointer-events-none" : ""
        }`}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Package Management
            </h1>

            <p className="text-gray-600">
              Add internet packages in monthly,
              weekly, daily and hourly intervals.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
          >
            Add Package
          </button>
        </div>

        {/* Monthly */}
        <PackageSection
          title="Monthly Packages"
          packages={monthlyPackages}
        />

        {/* Weekly */}
        <PackageSection
          title="Weekly Packages"
          packages={weeklyPackages}
        />

        {/* Daily */}
        <PackageSection
          title="Daily Packages"
          packages={dailyPackages}
        />

        {/* Hourly */}
        <PackageSection
          title="Hourly Packages"
          packages={hourlyPackages}
        />
      </section>

      {showModal && (
        <AddPackage
          onClose={() => setShowModal(false)}
          onSave={handleAddPackage}
        />
      )}
    </>
  );
}

export default Packages;

interface PackageSectionProps {
  title: string;
  packages: Package[];
}

function PackageSection({
  title,
  packages,
}: PackageSectionProps) {
  return (
    <div className="mb-10">
      <h2 className="text-center text-lg font-bold text-gray-400 mb-4">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
          >
            <img
              src={pkg.image}
              alt={pkg.type}
              className="w-full h-52 object-cover"
            />

            <div className="flex flex-col gap-2 items-center p-4">
              <h3 className="text-2xl font-bold text-gray-800">
                {pkg.type}
              </h3>

              <p className="text-gray-500">
                {pkg.speed}
              </p>

              <span className="bg-orange-400 text-white px-4 py-1 rounded-md">
                {pkg.price}
              </span>
            </div>
          </div>
        ))}

        {packages.length === 0 && (
          <div className="col-span-full text-center py-10 text-gray-400">
            No packages available
          </div>
        )}
      </div>
    </div>
  );
}