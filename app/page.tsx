import Image from "next/image";

// SVG Icons to match the design exactly
const UserIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const TwitterIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>;
const ClockIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const PizzaIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 11h.01"/><path d="M11 15h.01"/><path d="M16 16h.01"/><path d="m2 16 20 6-6-20A20 20 0 0 0 2 16Z"/><path d="M22 22 16 16"/></svg>;
const DeliveryIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polyline points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>;
const MapIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>;
const PastaIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/><path d="M12 3v18"/><path d="M3 12h18"/></svg>;
const SaladIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3 2 4h-2c-1.5 0-3 .5-3 2 0 2 2 2 2 4a5 5 0 0 1-5 5Z"/><path d="M11 20a7 7 0 0 1-7-7c0-3 2.5-5 5-5 2 0 4 1.5 4 4 0 2-2 3-2 5Z"/></svg>;
const TrophyIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>;

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fdfcf0] font-sans selection:bg-[#e38435]/30">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper.png')] z-[100]" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="flex gap-10 text-[11px] font-black tracking-[0.2em] uppercase">
          <a href="#" className="bg-[#e38435] text-white px-5 py-2 rounded-md shadow-sm">Home</a>
          <a href="#" className="hover:text-[#e38435] transition-colors py-2">Menu</a>
          <a href="#" className="hover:text-[#e38435] transition-colors py-2">Locations</a>
          <a href="#" className="hover:text-[#e38435] transition-colors py-2">Order Online</a>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <div className="w-20 h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center border-[6px] border-white shadow-xl overflow-hidden group hover:scale-105 transition-transform cursor-pointer">
            <div className="text-white text-[11px] font-black leading-tight text-center px-1">
              CRUST
              <div className="text-[7px] border-t border-b border-white py-0.5 my-0.5 tracking-[0.1em]">PIZZA CO</div>
              <div className="text-[6px] font-bold opacity-60">EST 1980</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-10 text-[11px] font-black tracking-[0.2em] uppercase">
          <a href="#" className="hover:text-[#e38435] transition-colors">About</a>
          <a href="#" className="hover:text-[#e38435] transition-colors">Contact</a>
          <div className="flex items-center gap-5 ml-4">
            <div className="w-7 h-7 bg-[#e38435] rounded-full flex items-center justify-center text-white shadow-sm hover:rotate-12 transition-transform cursor-pointer">
              <UserIcon />
            </div>
            <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <TwitterIcon />
            </div>
            <span className="text-[10px] font-black border-l border-black/10 pl-5 tracking-[0.1em] cursor-pointer hover:text-[#e38435]">CALL NOW</span>
          </div>
        </div>
      </nav>

      <main className="flex-1 mt-24 max-w-7xl mx-auto w-full px-6 space-y-32 pb-32">
        {/* Hero Section */}
        <section className="relative h-[650px] rounded-[50px] overflow-hidden group shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]">
          <Image
            src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop"
            alt="Delicious Pizza"
            fill
            priority
            unoptimized
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
          
          <div className="absolute top-1/2 left-16 -translate-y-1/2 max-w-xl space-y-8">
            <div className="relative group">
              {/* Torn Paper Effect Container */}
              <div className="bg-[#1a1a1a] p-10 rounded-lg transform -rotate-1 shadow-2xl relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-24 h-24 bg-white/10 rotate-45 blur-2xl" />
                <h1 className="text-white text-6xl font-black uppercase leading-[0.9] tracking-tighter">
                  FOR DELICIOUS,<br />
                  MADE-FROM<br />
                  SCRATCH PIZZAS
                </h1>
                <div className="w-20 h-1.5 bg-[#e38435] mt-6 mb-4" />
                <p className="text-white/70 text-sm tracking-[0.1em] font-bold uppercase italic">Master the unique taste of our secret recipe.</p>
              </div>
              {/* Shadow/Tear simulation */}
              <div className="absolute -bottom-2 -right-2 w-full h-full bg-black/20 -z-10 rounded-lg transform rotate-1" />
            </div>
            
            <button className="bg-[#e38435] text-white px-12 py-4 rounded-full font-black uppercase tracking-[0.2em] text-[11px] hover:bg-[#c66d28] transition-all transform hover:scale-105 hover:-translate-y-1 shadow-[0_10px_20px_-5px_rgba(227,132,53,0.5)]">
              Order Online
            </button>
          </div>
        </section>

        {/* Our Menu Section */}
        <section className="space-y-12">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-3xl font-black uppercase tracking-[0.3em] text-[#1a1a1a]">Our Menu</h2>
            <div className="w-16 h-1 bg-[#e38435]" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { name: "Chicken Parm", img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=1935&auto=format&fit=crop", price: "$12.99" },
              { name: "Chicken Alfredo", img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=2070&auto=format&fit=crop", price: "$14.50" },
              { name: "Spaghetti & Meatballs", img: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?q=80&w=1974&auto=format&fit=crop", price: "$11.95" },
              { name: "Baked Mac & Cheese", img: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?q=80&w=2070&auto=format&fit=crop", price: "$10.50" }
            ].map((item, i) => (
              <div key={i} className="group relative bg-white rounded-[30px] p-4 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-black/5">
                <div className="relative h-56 rounded-[25px] overflow-hidden mb-6 shadow-inner">
                  <Image 
                    src={item.img} 
                    alt={item.name} 
                    fill 
                    unoptimized
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 right-3 bg-[#e38435] text-white w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-black shadow-lg">
                    {item.price}
                  </div>
                </div>
                <div className="px-2 space-y-2">
                  <h3 className="font-black uppercase text-sm tracking-[0.1em] text-[#1a1a1a] group-hover:text-[#e38435] transition-colors">{item.name}</h3>
                  <p className="text-gray-400 text-[10px] leading-relaxed uppercase font-bold tracking-tight">
                    House-made sauce, premium mozzarella, and the finest local ingredients.
                  </p>
                  <div className="pt-3 flex items-center justify-between">
                    <div className="w-8 h-8 rounded-full bg-[#f8f7f2] flex items-center justify-center text-[#e38435] font-black text-xl group-hover:bg-[#e38435] group-hover:text-white transition-all cursor-pointer">
                      ›
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center pt-10">
            <button className="bg-[#e38435] text-white px-12 py-4 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#c66d28] transition-all hover:scale-105 shadow-xl">
              View our complete menu
            </button>
          </div>
        </section>

        {/* Chicago Section */}
        <section className="grid lg:grid-cols-2 gap-24 items-center py-16">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter text-[#1a1a1a]">
                HOME OF THE<br />
                CHICAGO-STYLE<br />
                <span className="text-[#e38435]">THIN CRUST PIZZA</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#1a1a1a]" />
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg italic font-medium">
              Experience the authentic taste of Chicago with our signature thin-crust recipe. 
              We've been perfecting our dough for over 40 years to bring you the best slice in town.
            </p>
            
            <div className="grid grid-cols-3 gap-8 max-w-md">
              {[
                { icon: <ClockIcon />, label: "Quick Service" },
                { icon: <PizzaIcon />, label: "Thin Crust" },
                { icon: <DeliveryIcon />, label: "Fast Delivery" },
                { icon: <MapIcon />, label: "Local Pickup" },
                { icon: <PastaIcon />, label: "Fresh Pasta" },
                { icon: <SaladIcon />, label: "Garden Salad" }
              ].map((service, i) => (
                <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="w-16 h-16 bg-[#e38435] rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 group-hover:text-[#1a1a1a] transition-colors text-center">{service.label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-6 pt-6">
              <button className="bg-[#1a1a1a] text-white px-10 py-3.5 rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#e38435] transition-all shadow-lg">Learn More</button>
              <button className="border-2 border-[#e38435] text-[#e38435] px-10 py-3.5 rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#e38435] hover:text-white transition-all">See Locations</button>
            </div>
          </div>
          
          <div className="relative">
            {/* Polaroid Effect Photos */}
            <div className="relative flex flex-col sm:flex-row justify-end gap-8">
              {/* Photo 1 */}
              <div className="w-64 h-[350px] bg-white p-4 shadow-[0_20px_40px_rgba(0,0,0,0.2)] rotate-3 transform border border-black/5 z-10 hover:rotate-0 transition-all duration-700 cursor-pointer group">
                <div className="relative h-[280px] bg-gray-100 mb-3 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                    alt="Founder" 
                    fill 
                    unoptimized
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  {/* Tape Simulation */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#fdfcf0]/80 backdrop-blur-sm -rotate-2 z-20 shadow-sm" />
                </div>
                <div className="text-[11px] text-center font-black text-gray-400 tracking-[0.2em] uppercase">Our Founder</div>
              </div>
              
              {/* Photo 2 */}
              <div className="w-64 h-[350px] bg-white p-4 shadow-[0_20px_40px_rgba(0,0,0,0.2)] -rotate-6 transform border border-black/5 mt-16 hover:rotate-0 transition-all duration-700 cursor-pointer group">
                <div className="relative h-[280px] bg-gray-100 mb-3 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" 
                    alt="Chef" 
                    fill 
                    unoptimized
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  {/* Tape Simulation */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#fdfcf0]/80 backdrop-blur-sm rotate-2 z-20 shadow-sm" />
                </div>
                <div className="text-[11px] text-center font-black text-gray-400 tracking-[0.2em] uppercase">Executive Chef</div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#e38435]/10 rounded-full blur-3xl -z-10" />
          </div>
        </section>

        {/* Ways to Enjoy */}
        <section className="space-y-16">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-3xl font-black uppercase tracking-[0.3em] text-[#1a1a1a]">Ways to Enjoy</h2>
            <div className="w-16 h-1 bg-[#e38435]" />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="relative flex-1 min-h-[500px] rounded-[50px] overflow-hidden group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=1927&auto=format&fit=crop" 
                alt="Pepperoni Pizza" 
                fill 
                unoptimized
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-48 h-48 bg-white/10 backdrop-blur-md rounded-full border-[3px] border-white flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-700 shadow-2xl">
                   <div className="text-white text-2xl font-black text-center tracking-tighter leading-none">
                     CRUST<br/><span className="text-xs tracking-[0.3em] opacity-80">PIZZA CO</span>
                   </div>
                 </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-10 lg:w-[400px]">
              <div className="flex-1 bg-[#1a1a1a] rounded-[50px] p-12 text-center flex flex-col items-center justify-center space-y-8 shadow-2xl group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#e38435]/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                <div className="w-20 h-20 bg-[#e38435] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <TrophyIcon />
                </div>
                <div className="space-y-4">
                  <h3 className="text-white text-2xl font-black uppercase tracking-[0.1em]">Award-Winning<br/>Pizza & Service</h3>
                  <p className="text-white/50 text-[10px] leading-relaxed max-w-xs mx-auto italic font-bold tracking-wider uppercase">Rated #1 thin crust pizza for 5 consecutive years by local food critics.</p>
                </div>
                <button className="bg-[#e38435] text-white px-12 py-4 rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-[#1a1a1a] transition-all shadow-xl">Learn More</button>
              </div>
              
              <div className="flex-1 bg-[#1a1a1a] rounded-[50px] p-12 text-center flex flex-col items-center justify-center space-y-8 shadow-2xl group relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#e38435]/10 rounded-full -ml-16 -mb-16 blur-2xl" />
                <div className="w-20 h-20 bg-[#e38435] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <PizzaIcon />
                </div>
                <div className="space-y-4">
                  <h3 className="text-white text-2xl font-black uppercase tracking-[0.1em]">Kids Eat Free<br/>Tuesdays!</h3>
                  <p className="text-white/50 text-[10px] leading-relaxed max-w-xs mx-auto italic font-bold tracking-wider uppercase">Bring the whole family! One free kids meal with every adult purchase.</p>
                </div>
                <button className="bg-[#e38435] text-white px-12 py-4 rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-[#1a1a1a] transition-all shadow-xl">View Complete Menu</button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-[#e38435] font-black tracking-[0.4em] uppercase text-xs">@yourbrandhandle</p>
              <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter text-[#1a1a1a]">
                LET'S WORK TOGETHER<br />
                FOR OUR COMMUNITY
              </h2>
              <div className="w-24 h-1.5 bg-[#e38435]" />
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg italic font-medium">
              We're more than just a pizza shop. We're part of the neighborhood. 
              Join us in supporting local schools, sports teams, and community events.
            </p>
            
            <div className="flex items-end gap-8 group">
               <div className="relative w-64 h-64 rounded-[40px] overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
                 <Image 
                   src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop" 
                   alt="Community" 
                   fill 
                   unoptimized
                   className="object-cover"
                 />
               </div>
               <div className="text-[12px] font-black uppercase tracking-[0.5em] transform -rotate-90 origin-left translate-x-16 translate-y-16 whitespace-nowrap text-black/10 select-none">OUR PEOPLE</div>
            </div>
          </div>
          
          <div className="bg-white p-12 rounded-[50px] shadow-2xl space-y-10 border border-black/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#e38435]/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            <h3 className="text-2xl font-black uppercase tracking-[0.2em] text-center text-[#1a1a1a]">Why Choose Us</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1974&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=1927&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=1925&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1528137858128-da740fd4e951?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop"
              ].map((img, i) => (
                <div key={i} className="relative aspect-square rounded-2xl overflow-hidden shadow-md group/img cursor-pointer">
                  <Image 
                    src={img} 
                    alt={`Gallery ${i}`} 
                    fill 
                    unoptimized
                    className="object-cover group-hover/img:scale-125 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-[#e38435]/20 opacity-0 group-hover/img:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
            <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">Follow us for daily updates</p>
          </div>
        </section>

        {/* Franchise & Visit Section */}
        <section className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="bg-[#f8f7f2] p-16 rounded-[50px] border-[3px] border-dashed border-black/5 space-y-10 flex flex-col justify-center relative overflow-hidden group">
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#e38435]/5 rounded-full blur-3xl" />
             <div className="space-y-4">
               <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-tighter text-[#1a1a1a]">
                 WANT TO OWN YOUR OWN<br/>
                 <span className="text-[#e38435]">CRUST PIZZA CO.?</span>
               </h3>
               <div className="w-16 h-1 bg-[#1a1a1a]" />
             </div>
             <p className="text-gray-400 text-xs italic font-bold tracking-widest uppercase">Franchise opportunities available across the country.</p>
             <button className="bg-[#e38435] text-white px-10 py-4 rounded-full font-black uppercase tracking-[0.2em] text-[11px] self-start hover:bg-[#1a1a1a] transition-all shadow-xl hover:scale-105">Submit a Request</button>
          </div>
          
          <div className="relative rounded-[50px] overflow-hidden shadow-2xl h-[450px] group">
            <Image 
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop" 
              alt="Store Front" 
              fill 
              unoptimized
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row items-end justify-between gap-8">
              <div className="text-white space-y-3">
                <p className="text-[11px] font-black tracking-[0.4em] uppercase text-[#e38435]">Visit Us Today</p>
                <h4 className="text-3xl font-black uppercase tracking-tighter">Main Street Store</h4>
                <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase">Open Daily: 11am - 10pm</p>
              </div>
              <div className="flex flex-wrap gap-3">
                 <div className="bg-[#e38435] text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:-translate-y-1 transition-transform cursor-pointer">Locations</div>
                 <div className="bg-white text-[#1a1a1a] px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:-translate-y-1 transition-transform cursor-pointer">Gift Cards</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-transparent text-[#1a1a1a] py-20 px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white font-black text-xs border-[6px] border-white shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                <div className="text-center">
                  CRUST
                  <div className="text-[7px] border-t border-b border-white py-0.5 my-0.5">PIZZA CO</div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-black uppercase tracking-tighter leading-none">WANT TO PLACE AN<br/>ORDER NOW?</p>
                <p className="text-[#e38435] text-[10px] font-black tracking-[0.3em] uppercase">Call us or order online</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-10 text-[11px] font-black uppercase tracking-[0.3em] text-[#1a1a1a]/60">
              <a href="#" className="hover:text-[#e38435] transition-colors">Menu</a>
              <a href="#" className="hover:text-[#e38435] transition-colors">Catering</a>
              <a href="#" className="hover:text-[#e38435] transition-colors">Commissions</a>
              <a href="#" className="hover:text-[#e38435] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#e38435] transition-colors">Terms</a>
            </div>
            
            <div className="flex gap-8">
              {['🐦', '📸', '📘'].map((icon, i) => (
                <span key={i} className="text-2xl hover:text-[#e38435] hover:scale-125 transition-all cursor-pointer grayscale hover:grayscale-0">{icon}</span>
              ))}
            </div>
          </div>
          
          <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[9px] font-black uppercase tracking-[0.6em] text-[#1a1a1a]/20">
            <p>© 2024 CRUST PIZZA CO. ALL RIGHTS RESERVED.</p>
            <p className="hover:text-[#e38435] transition-colors cursor-pointer">Crafted with passion in Chicago</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
