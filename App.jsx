import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import "./App.css";

// ---------------- FETCH FUNCTIONS ----------------

const fetchBreeds = async () => {
  const res = await fetch("https://dogapi.dog/api/v2/breeds");
  if (!res.ok) throw new Error("Failed to fetch breeds");
  return res.json();
};

const fetchBreedById = async (id) => {
  const res = await fetch(`https://dogapi.dog/api/v2/breeds/${id}`);
  if (!res.ok) throw new Error("Failed to fetch breed details");
  return res.json();
};

const fetchFacts = async () => {
  const res = await fetch("https://dogapi.dog/api/v2/facts?limit=5");
  if (!res.ok) throw new Error("Failed to fetch facts");
  return res.json();
};

const fetchGroups = async () => {
  const res = await fetch("https://dogapi.dog/api/v2/groups");
  if (!res.ok) throw new Error("Failed to fetch groups");
  return res.json();
};

// ---------------- COMPONENT ----------------

function App() {
  const [selectedBreedId, setSelectedBreedId] = useState(null);

  // 🐶 Breeds
  const {
    data: breedsData,
    isPending: breedsLoading,
    isError: breedsError,
    error: breedsErrorMsg,
  } = useQuery({
    queryKey: ["breeds"],
    queryFn: fetchBreeds,
  });

  // 🔍 Breed details
  const {
    data: breedData,
    isPending: breedLoading,
    isError: breedError,
  } = useQuery({
    queryKey: ["breed", selectedBreedId],
    queryFn: () => fetchBreedById(selectedBreedId),
    enabled: !!selectedBreedId,
  });

  // 🧠 Facts
  const {
    data: factsData,
    isPending: factsLoading,
    isError: factsError,
    refetch: refetchFacts,
  } = useQuery({
    queryKey: ["facts"],
    queryFn: fetchFacts,
  });

  // 🐕 Groups
  const {
    data: groupsData,
    isPending: groupsLoading,
    isError: groupsError,
  } = useQuery({
    queryKey: ["groups"],
    queryFn: fetchGroups,
  });

  return (
    <div>
      <h1>🐶 Dog Data App</h1>

      {/* SIDE-BY-SIDE LAYOUT */}
      <div className="breed-container">
        {/* LEFT: LIST */}
        <div className="breed-list">
          <h2>Select a Dog Breed</h2>

          {breedsLoading && <p>Loading breeds...</p>}
          {breedsError && <p>Error: {breedsErrorMsg.message}</p>}

          {breedsData && (
            <ul>
              {breedsData.data.map((breed) => (
                <li
                  key={breed.id}
                  onClick={() => setSelectedBreedId(breed.id)}
                  className={selectedBreedId === breed.id ? "selected" : ""}
                >
                  {breed.attributes.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* RIGHT: DETAILS */}
        <div className="breed-details">
          <h2>Breed Details</h2>

          {!selectedBreedId && <p>Select a breed</p>}
          {breedLoading && <p>Loading...</p>}
          {breedError && <p>Error loading details</p>}

          {breedData && (
            <div>
              <h3>{breedData.data.attributes.name}</h3>
              <p>{breedData.data.attributes.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* FACTS */}
      <h2>Dog Facts</h2>
      <button onClick={refetchFacts}>🔄 Refresh Facts</button>

      {factsLoading && <p>Loading facts...</p>}
      {factsError && <p>Error loading facts</p>}

      {factsData && (
        <ul>
          {factsData.data.map((fact) => (
            <li key={fact.id}>{fact.attributes.body}</li>
          ))}
        </ul>
      )}

      {/* GROUPS */}
      <h2>Dog Groups</h2>

      {groupsLoading && <p>Loading groups...</p>}
      {groupsError && <p>Error loading groups</p>}

      {groupsData && (
        <ul>
          {groupsData.data.map((group) => (
            <li key={group.id}>{group.attributes.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
