import { useRouter } from "next/router"
export default function buttonRouter({ destination, buttonText, onClick }) {
  const router = useRouter()
  const handleClick = () => {
    if (onclick && typeof onclick === "function") {
      onClick()
    }
    router.push(destination, { scroll: false })
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        {buttonText}
      </button>
    </>
  )
}
