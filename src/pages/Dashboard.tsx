
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Settings, CreditCard, ShoppingCart, User } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock user data
const mockUser = {
  id: "user123",
  name: "John Doe",
  email: "john.doe@example.com",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  purchases: [
    {
      id: "order123",
      date: "2025-03-15",
      product: "Resume Writing Service",
      status: "Completed",
      price: 149.00
    },
    {
      id: "order456",
      date: "2025-02-28",
      product: "LinkedIn Optimization",
      status: "In Progress",
      price: 129.00
    },
    {
      id: "order789",
      date: "2025-01-20",
      product: "Executive Pro Template",
      status: "Completed",
      price: 39.00
    }
  ],
  recentActivities: [
    {
      id: 1,
      action: "Downloaded template",
      item: "Executive Pro Template",
      date: "2025-04-02"
    },
    {
      id: 2,
      action: "Submitted revision request",
      item: "Resume Writing Service",
      date: "2025-03-20"
    },
    {
      id: 3,
      action: "Profile updated",
      item: "Account Settings",
      date: "2025-03-10"
    }
  ]
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  
  // In a real app, check if user is authenticated
  // If not, redirect to login page
  // useEffect(() => {
  //   if (!isAuthenticated) navigate("/auth/login");
  // }, [isAuthenticated, navigate]);
  
  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <div className="glass rounded-xl p-6">
              <h2 className="text-xl font-medium mb-4">Welcome back, {mockUser.name}!</h2>
              <p className="text-muted-foreground">
                Track your purchases, manage your services, and update your profile settings all in one place.
              </p>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-medium mb-4">Recent Purchases</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-3">Order ID</th>
                      <th className="text-left pb-3">Date</th>
                      <th className="text-left pb-3">Product</th>
                      <th className="text-left pb-3">Status</th>
                      <th className="text-right pb-3">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockUser.purchases.map((purchase) => (
                      <tr key={purchase.id} className="border-b last:border-0">
                        <td className="py-3">{purchase.id}</td>
                        <td className="py-3">{purchase.date}</td>
                        <td className="py-3">{purchase.product}</td>
                        <td className="py-3">
                          <span 
                            className={cn(
                              "px-2 py-1 rounded-full text-xs",
                              purchase.status === "Completed" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-yellow-100 text-yellow-800"
                            )}
                          >
                            {purchase.status}
                          </span>
                        </td>
                        <td className="py-3 text-right">${purchase.price.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex justify-end">
                <button 
                  onClick={() => setActiveTab("purchases")}
                  className="text-primary text-sm hover:underline"
                >
                  View All Purchases
                </button>
              </div>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
              <ul className="space-y-3">
                {mockUser.recentActivities.map((activity) => (
                  <li key={activity.id} className="flex justify-between border-b last:border-0 pb-3 last:pb-0">
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.item}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{activity.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      
      case "purchases":
        return (
          <div className="glass rounded-xl p-6">
            <h2 className="text-xl font-medium mb-6">Your Purchases</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left pb-3">Order ID</th>
                    <th className="text-left pb-3">Date</th>
                    <th className="text-left pb-3">Product</th>
                    <th className="text-left pb-3">Status</th>
                    <th className="text-right pb-3">Price</th>
                    <th className="text-right pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockUser.purchases.map((purchase) => (
                    <tr key={purchase.id} className="border-b last:border-0">
                      <td className="py-3">{purchase.id}</td>
                      <td className="py-3">{purchase.date}</td>
                      <td className="py-3">{purchase.product}</td>
                      <td className="py-3">
                        <span 
                          className={cn(
                            "px-2 py-1 rounded-full text-xs",
                            purchase.status === "Completed" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-yellow-100 text-yellow-800"
                          )}
                        >
                          {purchase.status}
                        </span>
                      </td>
                      <td className="py-3 text-right">${purchase.price.toFixed(2)}</td>
                      <td className="py-3 text-right">
                        <button className="text-primary text-sm hover:underline">
                          Manage
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case "services":
        return (
          <div className="glass rounded-xl p-6">
            <h2 className="text-xl font-medium mb-6">Your Services</h2>
            <div className="space-y-6">
              {mockUser.purchases.map((purchase) => (
                <div key={purchase.id} className="border-b last:border-0 pb-6 last:pb-0">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">{purchase.product}</h3>
                    <span 
                      className={cn(
                        "px-2 py-1 rounded-full text-xs",
                        purchase.status === "Completed" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      )}
                    >
                      {purchase.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Purchased on {purchase.date}</p>
                  
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-sm bg-primary text-white rounded hover:bg-primary/90 transition-colors">
                      Access Files
                    </button>
                    {purchase.status === "In Progress" && (
                      <button className="px-3 py-1 text-sm border border-gray-200 rounded hover:bg-gray-50 transition-colors">
                        Track Progress
                      </button>
                    )}
                    <button className="px-3 py-1 text-sm border border-gray-200 rounded hover:bg-gray-50 transition-colors">
                      Get Support
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case "settings":
        return (
          <div className="glass rounded-xl p-6">
            <h2 className="text-xl font-medium mb-6">Account Settings</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    defaultValue={mockUser.name}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    defaultValue={mockUser.email}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Profile Picture
                  </label>
                  <div className="flex items-center gap-4">
                    <img 
                      src={mockUser.profileImage} 
                      alt={mockUser.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      Change Picture
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Password</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div></div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Email notifications for new products</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span>Email notifications for order updates</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span>Email notifications for marketing</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 section-padding">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <div className="md:w-64 glass rounded-xl p-6 md:h-fit">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                <img 
                  src={mockUser.profileImage} 
                  alt={mockUser.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{mockUser.name}</p>
                  <p className="text-sm text-muted-foreground">{mockUser.email}</p>
                </div>
              </div>
              
              <nav>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => setActiveTab("overview")}
                      className={cn(
                        "flex items-center gap-3 w-full px-3 py-2 rounded-md transition-colors",
                        activeTab === "overview" 
                          ? "bg-primary text-white" 
                          : "hover:bg-gray-100"
                      )}
                    >
                      <FileText size={18} />
                      Dashboard Overview
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab("purchases")}
                      className={cn(
                        "flex items-center gap-3 w-full px-3 py-2 rounded-md transition-colors",
                        activeTab === "purchases" 
                          ? "bg-primary text-white" 
                          : "hover:bg-gray-100"
                      )}
                    >
                      <ShoppingCart size={18} />
                      Purchases
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab("services")}
                      className={cn(
                        "flex items-center gap-3 w-full px-3 py-2 rounded-md transition-colors",
                        activeTab === "services" 
                          ? "bg-primary text-white" 
                          : "hover:bg-gray-100"
                      )}
                    >
                      <CreditCard size={18} />
                      Manage Services
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab("settings")}
                      className={cn(
                        "flex items-center gap-3 w-full px-3 py-2 rounded-md transition-colors",
                        activeTab === "settings" 
                          ? "bg-primary text-white" 
                          : "hover:bg-gray-100"
                      )}
                    >
                      <Settings size={18} />
                      Account Settings
                    </button>
                  </li>
                  <li className="pt-4 mt-4 border-t">
                    <button 
                      onClick={() => navigate("/")}
                      className="flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-muted-foreground"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
