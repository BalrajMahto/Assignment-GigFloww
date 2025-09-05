import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1000;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  img {
    height: 40px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #1f2937;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  
  &:hover {
    color: #2563eb;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #2563eb;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownContent = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem 0;
  z-index: 1000;
`;

const DropdownItem = styled.a`
  display: block;
  padding: 0.75rem 1.5rem;
  color: #1f2937;
  text-decoration: none;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f3f4f6;
    color: #2563eb;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const MobileNavLink = styled.a`
  display: block;
  padding: 1rem;
  color: #1f2937;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid #e5e7eb;
  
  &:hover {
    color: #2563eb;
    background-color: #f3f4f6;
  }
`;

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo>
        <img src="/logo.svg" alt="EngineeredFloww Logo" />
        GigFloww
      </Logo>

      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <DropdownContainer
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <NavLink href="#">Services</NavLink>
          <AnimatePresence>
            {isDropdownOpen && (
              <DropdownContent
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <DropdownItem href="/services/web-development">Web Development</DropdownItem>
                <DropdownItem href="/services/mobile-apps">Mobile Apps</DropdownItem>
                <DropdownItem href="/services/ui-ux">UI/UX Design</DropdownItem>
                <DropdownItem href="/services/digital-marketing">Digital Marketing</DropdownItem>
              </DropdownContent>
            )}
          </AnimatePresence>
        </DropdownContainer>
        <NavLink href="/gigs">Gigs</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </NavLinks>

      <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </MobileMenuButton>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/services">Services</MobileNavLink>
            <MobileNavLink href="/gigs">Gigs</MobileNavLink>
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar; 