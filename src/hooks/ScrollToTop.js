import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ history }) => {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    const unlisten = history.listen(() => {
      window.scrollTo({ top: 0, behaviour: 'smooth' })
    });
    return () => {
      unlisten()
    }
  }, [])
  return (null)
}

export default withRouter(ScrollToTop)
