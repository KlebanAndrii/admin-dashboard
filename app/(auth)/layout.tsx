import ThemeToggler from "@/components/ThemeToggler"


const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <div className="absolute top-5 right-0 text-white">
        <ThemeToggler />
      </div>
      {children}
    </div>
  )
}

export default AuthLayout