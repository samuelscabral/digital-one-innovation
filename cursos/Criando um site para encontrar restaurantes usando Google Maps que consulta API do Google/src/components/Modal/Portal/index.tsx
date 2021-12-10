import React from 'react';
import ReactDOM from 'react-dom';

interface PortalModalProps {
  children: React.ReactNode;
}

const PortalModal = ({ children }: PortalModalProps) => {
  const portal = document.getElementById('modal-root');
  return portal ? ReactDOM.createPortal(children, portal) : <div />;
};

export default PortalModal;
