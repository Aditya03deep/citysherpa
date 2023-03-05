import React, { useState } from 'react';

function TravelBudgetCalculator() {
  const [expenses, setExpenses] = useState({
    airfare: 0,
    accommodation: 0,
    food: 0,
    transportation: 0,
    activities: 0
  });

  const [budget, setBudget] = useState(0);

  const handleInputChange = (e) => {
    setExpenses({
      ...expenses,
      [e.target.name]: parseFloat(e.target.value)
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let totalExpenses = 0;
    for (let expense in expenses) {
      totalExpenses += expenses[expense];
    }
    setBudget(totalExpenses);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Airfare:
          <input
            type="number"
            name="airfare"
            value={expenses.airfare}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Accommodation:
          <input
            type="number"
            name="accommodation"
            value={expenses.accommodation}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Food:
          <input
            type="number"
            name="food"
            value={expenses.food}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Transportation:
          <input
            type="number"
            name="transportation"
            value={expenses.transportation}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>    
          Activities:
          <input
            type="number"
            name="activities"
            value={expenses.activities}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Calculate</button>
      </form>
      <p>Total Budget: ${budget}</p>
    </div>
  );
}

export default TravelBudgetCalculator;
