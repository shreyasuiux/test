import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { AccentureFooter } from './components/AccentureFooter';
import { ThemeProvider } from './components/ThemeProvider';
import { ScrollToTop } from './components/ScrollToTop';
import { AppRoutes } from './routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop />

        <div className="bg-white dark:bg-black min-h-screen relative overflow-hidden transition-colors duration-300">

          {/* Single gradient background for entire page */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#A020F0]/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A020F0]/5 blur-[120px] rounded-full pointer-events-none" />

          {/* Main gradient layers */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="relative w-full h-full">

              <div className="absolute inset-0 bg-gradient-to-br from-[#A020F0]/10 via-purple-600/5 to-pink-600/5" />

              <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />
              <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-purple-500/15 blur-3xl rounded-full" />

              <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-pink-500/10 rounded-full blur-3xl" />

            </div>
          </div>

          <div className="relative z-10">
            <Header />
            <AppRoutes />
            <AccentureFooter />
          </div>

        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}
