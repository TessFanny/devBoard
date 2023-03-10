
function useColumnDrop ( column, handleDrop) {
    const dropRef = useRef(null);
    const [isOver, setIsOver] = useState(false);
  
    const handleDragEnter = useCallback(() => {
      setIsOver(true);
    }, []);
  
    const handleDragLeave = useCallback(() => {
      setIsOver(false);
    }, []);
  
    const handleDrop = useCallback(
      (event) => {
        event.preventDefault();
        event.stopPropagation();
  
        const dragItemId = event.dataTransfer.getData('text/plain');
        const dragItemFrom = event.dataTransfer.getData('from');
  
        if (!dragItemId || dragItemFrom === column) {
          return;
        }
  
        handleDrop(dragItemFrom, dragItemId);
      },
      [column, handleDrop]
    );
  
    useEffect(() => {
      const dropTarget = dropRef.current;
  
      if (!dropTarget) {
        return;
      }
  
      dropTarget.addEventListener('dragenter', handleDragEnter);
      dropTarget.addEventListener('dragleave', handleDragLeave);
      dropTarget.addEventListener('dragover', (event) => {
        event.preventDefault();
        event.stopPropagation();
      });
      dropTarget.addEventListener('drop', handleDrop);
  
      return () => {
        dropTarget.removeEventListener('dragenter', handleDragEnter);
        dropTarget.removeEventListener('dragleave', handleDragLeave);
        dropTarget.removeEventListener('dragover', () => {});
        dropTarget.removeEventListener('drop', handleDrop);
      };
    }, [dropRef, handleDragEnter, handleDragLeave, handleDrop]);
  
    return {
      isOver,
      dropRef,
    };
  }
  
  export default useColumnDrop;