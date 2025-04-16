import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { useSearchHotelsMutation } from "@/services/hotel-api";
import { useNavigate } from "react-router-dom";
import ButtonLoading from "../ui/button-loading";

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHotels, {isLoading}] = useSearchHotelsMutation();
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      const result = await searchHotels({ searchQuery }).unwrap();
      navigate("/", { state: { searchResults: result } });
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <div className="">
      <div className="relative z-10 flex flex-col items-center text-white justify-center px-8 pt-32 pb-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          Find Your Best Staycation
        </h1>
        <p className="text-xl mb-12 text-center max-w-2xl">
          Describe your dream destination and experience, and we'll find the
          perfect place for you.
        </p>

        <form onSubmit={handleSearch} className="w-full max-w-3xl bg-black/10 backdrop-blur-md lg:h-16 rounded-full p-2 flex items-center">
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Describe your destination, experience, or hotel..."
            className="flex-grow  bg-transparent lg:text-lg  text-white placeholder:text-white/50 border-none outline-none ring-0 ring-offset-0 focus:border-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          {isLoading ? (
            <ButtonLoading children="Searching" className="rounded-full w-48 flex items-center gap-x-2 lg:h-12"/>
          ): (
            <Button
            type="submit"
            className="rounded-full w-48 flex items-center gap-x-2 lg:h-12"
          >
            <Sparkles
              style={{ width: "20px", height: "20px" }}
              className="mr-2 animate-pulse text-sky-400"
            />
            <span className="lg:text-lg">AI Search</span>
          </Button>
          )
          } 
          
        </form>
      </div>
    </div>
  );
};

export default Hero;