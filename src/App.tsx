import {
  Navigate,
  Route,
  Routes,
} from 'react-router'

import { PortfolioLayout } from './components/PortfolioLayout'
import { Sidebar } from './components/Sidebar'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { EducationPage } from './pages/EducationPage'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { SkillsPage } from './pages/SkillsPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'

function App() {
  return (
    <PortfolioLayout sidebar={<Sidebar />}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/projects"
          element={<ProjectsPage />}
        />
        <Route
          path="/projects/:slug"
          element={<ProjectDetailPage />}
        />
        <Route path="/skills" element={<SkillsPage />} />
        <Route
          path="/education"
          element={<EducationPage />}
        />
        <Route
          path="/contact"
          element={<ContactPage />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </PortfolioLayout>
  )
}

export default App