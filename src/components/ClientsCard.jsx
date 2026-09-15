import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, ShoppingCart, Cpu, Wrench } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ClientsCard = () => {
  const { t } = useApp();
  const [activeClientIndex, setActiveClientIndex] = useState(0);

  const clients = [
    { name: "Gadget Iran", domain: "gadgetiran.com", icon: <ShoppingCart className="w-10 h-10 text-sky-400" /> },
    { name: "Bakhshi Shop", domain: "bakhshi.shop", icon: <ShoppingCart className="w-10 h-10 text-emerald-400" /> },
    { name: "Melltech", domain: "melltech.co", icon: <Cpu className="w-10 h-10 text-indigo-400" /> },
    { name: "Manestar", domain: "manestar.ir", icon: <Globe className="w-10 h-10 text-pink-400" /> },
    { name: "Tamiratoos", domain: "tamiratoos.com", icon: <Wrench className="w-10 h-10 text-amber-400" /> },
  ];

  const current = clients[activeClientIndex];

  const nextClient = () => {
    setActiveClientIndex((prev) => (prev + 1) % clients.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      onClick={nextClient}
      className="relative flex flex-col justify-between p-6 sm:p-7 rounded-[2rem] bg-bento-charcoal dark:bg-[#151922] text-white shadow-bento dark:shadow-bento-dark border border-neutral-700/40 dark:border-white/10 group cursor-pointer select-none transition-all duration-300 min-h-[190px]"
    >
      {/* Top Right: Corner Mark icon from Reference Image ⌝ */}
      <div className="flex justify-end">
        <div className="w-7 h-7 rounded-full bg-white/10 dark:bg-white/5 flex items-center justify-center text-white/80 group-hover:text-white group-hover:rotate-45 transition-all duration-300">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Center: Brand Icon & Domain with smooth switch */}
      <div className="flex flex-col items-center justify-center my-auto py-2">
        <motion.div
          key={current.name}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="flex flex-col items-center"
        >
          {current.icon}
          <span className="text-xs font-mono text-neutral-300 mt-2 font-semibold">
            {current.domain}
          </span>
        </motion.div>
      </div>

      {/* Bottom: Label */}
      <div className="flex items-center justify-between pt-2">
        <h4 className="text-sm font-semibold tracking-tight text-white/90 group-hover:text-white">
          {t('bento.clientsLabel')}
        </h4>
        <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 group-hover:text-neutral-200">
          {current.name}
        </span>
      </div>
    </motion.div>
  );
};

export default ClientsCard;
