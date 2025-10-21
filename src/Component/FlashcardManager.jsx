import React, { useState } from "react";

const FlashcardManager = () => {
  const [flashcards, setFlashcards] = useState([
    { id: 1, question: "What is React?", answer: "A JavaScript library for building UIs." },
  ]);
  const [newCard, setNewCard] = useState({ question: "", answer: "" });
  const [editCard, setEditCard] = useState(null);

  const handleAdd = () => {
    if (!newCard.question || !newCard.answer) return;
    setFlashcards([...flashcards, { ...newCard, id: Date.now() }]);
    setNewCard({ question: "", answer: "" });
  };

  const handleDelete = (id) => {
    setFlashcards(flashcards.filter((card) => card.id !== id));
  };

  const handleEdit = (card) => {
    setEditCard(card);
  };

  const handleSaveEdit = () => {
    setFlashcards(
      flashcards.map((c) => (c.id === editCard.id ? editCard : c))
    );
    setEditCard(null);
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Manage Flashcards</h1>

      {/* Add Flashcard */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Add New Flashcard</h2>
        <input
          type="text"
          placeholder="Question"
          className="w-full border rounded-lg p-2 mb-2"
          value={newCard.question}
          onChange={(e) =>
            setNewCard({ ...newCard, question: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Answer"
          className="w-full border rounded-lg p-2 mb-3"
          value={newCard.answer}
          onChange={(e) =>
            setNewCard({ ...newCard, answer: e.target.value })
          }
        />
        <button
          onClick={handleAdd}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Add Flashcard
        </button>
      </div>

      {/* Edit Section */}
      {editCard && (
        <div className="bg-yellow-50 p-6 rounded-xl shadow-lg w-full max-w-md mt-6">
          <h2 className="text-lg font-semibold text-yellow-800 mb-3">
            Edit Flashcard
          </h2>
          <input
            type="text"
            className="w-full border rounded-lg p-2 mb-2"
            value={editCard.question}
            onChange={(e) =>
              setEditCard({ ...editCard, question: e.target.value })
            }
          />
          <input
            type="text"
            className="w-full border rounded-lg p-2 mb-3"
            value={editCard.answer}
            onChange={(e) =>
              setEditCard({ ...editCard, answer: e.target.value })
            }
          />
          <button
            onClick={handleSaveEdit}
            className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
          >
            Save Changes
          </button>
        </div>
      )}

      {/* Flashcard List */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">
          Flashcard List
        </h2>
        {flashcards.length > 0 ? (
          flashcards.map((card) => (
            <div
              key={card.id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-2"
            >
              <div>
                <p className="font-semibold text-gray-800">{card.question}</p>
                <p className="text-sm text-gray-600">{card.answer}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(card)}
                  className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(card.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No flashcards yet.</p>
        )}
      </div>
    </div>
  );
};

export default FlashcardManager;
