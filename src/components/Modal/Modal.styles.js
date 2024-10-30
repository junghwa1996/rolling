export const styledModal = {
  overlay: {
    width: '100%',
    height: '100vh',
    zIndex: '10',
    position: 'fixed',
    top: '0',
    left: '0',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    zIndex: '150',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    padding: '0',
    border: 'none',
    justifyContent: 'center',
    overflow: 'auto',
  },
};
