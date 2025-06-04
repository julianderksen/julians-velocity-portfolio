
import { useState, useEffect } from "react";
import { ExternalLink, Github, Star, GitFork, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

const Portfolio = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/julianderksen/repos?sort=updated&per_page=12');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        
        // Filter out forked repositories and sort by stars
        const filteredRepos = data
          .filter((repo: Repository) => !repo.name.includes('fork'))
          .sort((a: Repository, b: Repository) => b.stargazers_count - a.stargazers_count);
        
        setRepositories(filteredRepos);
      } catch (err) {
        setError('Kon repositories niet laden');
        console.error('Error fetching repositories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: 'long'
    });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: '#f1e05a',
      TypeScript: '#3178c6',
      Python: '#3572A5',
      Java: '#b07219',
      HTML: '#e34c26',
      CSS: '#1572B6',
      React: '#61dafb',
      Vue: '#4FC08D'
    };
    return colors[language || ''] || '#6b7280';
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-light text-black mb-4">
              Mijn <span className="font-semibold">Portfolio</span>
            </h1>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Een overzicht van mijn recente projecten en open source bijdragen. 
              Elk project toont mijn passie voor schone code en innovatieve oplossingen.
            </p>
          </div>
        </div>
      </section>

      {/* GitHub Link */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <a 
            href="https://github.com/julianderksen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-lg text-gray-700 hover:text-black transition-colors duration-300 group"
          >
            <Github className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
            Bekijk alle projecten op GitHub
            <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="border border-gray-200 shadow-sm">
                  <CardHeader>
                    <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-6">{error}</p>
              <Button 
                onClick={() => window.location.reload()} 
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white"
              >
                Probeer opnieuw
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repositories.map((repo) => (
                <Card 
                  key={repo.id} 
                  className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold text-black group-hover:text-gray-700 transition-colors">
                      {repo.name}
                    </CardTitle>
                    {repo.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {repo.description}
                      </p>
                    )}
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    {/* Topics */}
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span 
                            key={topic}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-4">
                        {repo.language && (
                          <div className="flex items-center">
                            <div 
                              className="w-3 h-3 rounded-full mr-2"
                              style={{ backgroundColor: getLanguageColor(repo.language) }}
                            ></div>
                            <span>{repo.language}</span>
                          </div>
                        )}
                        
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <GitFork className="h-4 w-4 mr-1" />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>
                    </div>

                    {/* Updated date */}
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>Bijgewerkt {formatDate(repo.updated_at)}</span>
                    </div>

                    {/* Action button */}
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-black hover:text-gray-600 font-medium text-sm transition-colors group/link"
                    >
                      Bekijk Project
                      <ExternalLink className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* View More */}
          {repositories.length > 0 && (
            <div className="text-center mt-12">
              <a 
                href="https://github.com/julianderksen" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg font-medium tracking-wide transition-all duration-300"
                >
                  Bekijk Alle Projecten op GitHub
                </Button>
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
