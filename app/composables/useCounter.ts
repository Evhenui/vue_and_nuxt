export const useCounter = () => {
  const count = useState('counter', () => 0)
  const inc = () => count.value++
  return { count, inc }
}