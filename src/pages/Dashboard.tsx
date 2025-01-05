import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, Search, Users, GraduationCap } from "lucide-react";

const Dashboard = () => {
  const { logout } = useAuth();
  const [searchTeachers, setSearchTeachers] = useState("");
  const [searchStudents, setSearchStudents] = useState("");

  // Dummy data for demonstration
  const teachers = [
    { id: 1, name: "John Doe", subject: "Mathematics" },
    { id: 2, name: "Jane Smith", subject: "Physics" },
    // Add more teachers as needed
  ];

  const students = [
    { id: 1, name: "Alice Johnson", grade: "1st Year" },
    { id: 2, name: "Bob Wilson", grade: "2nd Year" },
    // Add more students as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">KHOOT ECES - École</h1>
          <Button
            onClick={logout}
            variant="outline"
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Déconnexion
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Statistics Cards */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Enseignants
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teachers.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Apprenants
              </CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{students.length}</div>
            </CardContent>
          </Card>

          {/* Teachers Table */}
          <Card>
            <CardHeader>
              <CardTitle>Liste des enseignants</CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Rechercher un enseignant..."
                  value={searchTeachers}
                  onChange={(e) => setSearchTeachers(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">Nom</th>
                      <th scope="col" className="px-6 py-3">Matière</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teachers.map((teacher) => (
                      <tr key={teacher.id} className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4">{teacher.name}</td>
                        <td className="px-6 py-4">{teacher.subject}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Students Table */}
          <Card>
            <CardHeader>
              <CardTitle>Liste des apprenants</CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Rechercher un apprenant..."
                  value={searchStudents}
                  onChange={(e) => setSearchStudents(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">Nom</th>
                      <th scope="col" className="px-6 py-3">Niveau</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id} className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4">{student.name}</td>
                        <td className="px-6 py-4">{student.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;