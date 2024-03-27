import { TriangleAlert } from 'lucide-react'
import './App.css'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

function App() {


  return (
    <div className='min-h-screen flex items-center justify-center'>
      <Card className='w-fit h-fit'>
        <CardHeader>
          <CardTitle>Bienvenue sur jboureux.fr</CardTitle>
          <CardDescription>Portfolio de développeur de Jérémy Boureux</CardDescription>
        </CardHeader>
        <CardContent>
          <span className='flex flex-row'>
            <TriangleAlert className='mr-2'/> Ce site web est en cours de maintenance.
          </span>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
