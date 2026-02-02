import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#121212] border-t border-[#262626]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-[#14B8A6] mb-4">Nodenomics</h3>
            <p className="text-sm text-[#737373]">The Machine Economy Starts Here</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Knowledge Hub</h4>
            <ul className="space-y-2 text-sm text-[#737373]">
              <li><Link href="/" className="hover:text-[#14B8A6]">Home</Link></li>
              <li><Link href="/impact" className="hover:text-[#14B8A6]">Impact</Link></li>
              <li><Link href="/research" className="hover:text-[#14B8A6]">Research</Link></li>
              <li><Link href="/partners" className="hover:text-[#14B8A6]">Partners</Link></li>
              <li><Link href="/faq" className="hover:text-[#14B8A6]">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Participants</h4>
            <ul className="space-y-2 text-sm text-[#737373]">
              <li><span className="hover:text-[#14B8A6] cursor-pointer">IoT Devices</span></li>
              <li><span className="hover:text-[#14B8A6] cursor-pointer">Value-Added Brokers</span></li>
              <li><span className="hover:text-[#14B8A6] cursor-pointer">AI Agents</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-[#737373]">
              <li><a href="#" className="hover:text-[#14B8A6]">Privacy</a></li>
              <li><a href="#" className="hover:text-[#14B8A6]">Terms</a></li>
              <li><a href="#" className="hover:text-[#14B8A6]">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-[#262626] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#737373]">© 2026 Nodenomics. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-[#737373] hover:text-[#14B8A6]">Twitter</a>
            <a href="#" className="text-[#737373] hover:text-[#14B8A6]">LinkedIn</a>
            <a href="#" className="text-[#737373] hover:text-[#14B8A6]">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
