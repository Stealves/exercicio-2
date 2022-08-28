import './App.css';
import { AppHeader } from './components/AppHeader';
import { CategoriesList } from './components/CategoriesList';
import { ApplicationRoutes } from './routes/ApplicationRoutes';

let links = [
  { name: "Menu 1",
    link: "#link"
  }, 
  { name: "Menu 2",
    link: "#link"
  },
  { name: "Menu 3",
    link: "#link"
  },
  { name: "Menu 4",
    link: "#link"
  },
]

let categories = [
  { name: "Category 1",
    link: "#link"
  }, 
  { name: "Category 2",
    link: "#link"
  },
  { name: "Category 3",
    link: "#link"
  },
  { name: "Category 4",
    link: "#link"
  },
];

function App() {
  return (
    <div id="pageContent">
      <AppHeader logo="New Logo" links={ links } />
      <CategoriesList categories = { categories } />
      <ApplicationRoutes />
    </div>
  );
}

export default App;