import Header from '@/components/shared/Header';

const BaseLayout = props => {
  const { className, children, user, loading } = props;
  return (
    <div className="layout-container">
      <Header user={user} loading={loading}/>
      <main className={`cover ${className}`}>
        <div className="wrapper">
          {children}
        </div>
      </main>
    </div>
  )
}

export default BaseLayout;