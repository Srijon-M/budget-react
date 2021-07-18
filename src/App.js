import React, { useState, useEffect } from 'react'
import './App.css'
import { Container } from 'semantic-ui-react'

import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances'
import EntryLines from './components/EntryLines'
import ModalEdit from './components/ModalEdit'

function App() {

  const [entries, setEntries] = useState(initialValues)
  const [description, setDescription] = useState('')
  const [value, setValue] = useState(0) 
  const [isExpense, setIsExpense] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [entryId, setEntryId] = useState()
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [budget, setBudget] = useState(0)

  useEffect(() => {
    if(!isOpen && entryId){
      const index = entries.findIndex(entry => entry.id === entryId)
      const newEntries = [...entries]
      newEntries[index].description = description
      newEntries[index].value = value
      newEntries[index].isExpense = isExpense
      setEntries(newEntries)
      resetEntry()
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    let totalIncome = 0
    let totalExpense = 0
    entries.map(entry => {
      if(entry.isExpense){
        return totalExpense += Number(entry.value)
      } else{
        return totalIncome += Number(entry.value)
      }
    })
    let total = totalIncome - totalExpense
    // console.log(`Total Income is ${totalIncome}`)
    // console.log(`Total Expense is ${totalExpense}`)
    setIncome(totalIncome)
    setExpense(totalExpense)
    setBudget(total)
  }, [entries])

  function deleteEntry(id){
    const result = entries.filter(entry => entry.id !== id)
    setEntries(result)
  }

  function editEntry(id){
    if(id){
      const index = entries.findIndex(entry => entry.id === id)
      const entry = entries[index]
      setEntryId(id)
      setDescription(entry.description)
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true)
    }
  }

  function addEntry(){
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense
    })
    console.log('result:', result)
    console.log('entries:', entries)
    setEntries(result)
    resetEntry()
  }

  function resetEntry(){
    setDescription('')
    setValue('')
    setIsExpense(true)
  }

  return (
    <Container>
      <MainHeader title='Budget'/>
      <DisplayBalance title='Your Balance' value={budget} size='small'/> 
      <DisplayBalances income={income} expense={expense}/>
      <MainHeader title='History' type='h3'/>
      <EntryLines 
        entries={entries} 
        deleteEntry={deleteEntry}
        setIsOpen={setIsOpen}
        editEntry={editEntry}
      />
      <MainHeader title='Add new transaction' type='h3'/>
      <NewEntryForm 
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ModalEdit 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

var initialValues = [
  {
    id: 1,
    description: 'Salary',
    value: 4500.00,
    isExpense: false
  },
  {
    id: 2,
    description: 'Water Bill',
    value: 50.00,
    isExpense: true
  },
  {
    id: 3,
    description: 'Rent',
    value: 800.00,
    isExpense: true
  },
  {
    id: 4,
    description: 'Electricity Bill',
    value: 120.00,
    isExpense: true
  },
]
