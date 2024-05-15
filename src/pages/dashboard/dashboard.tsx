const Dashboard = () => {
  return (
    <div className="h-full px-8 overflow-y-auto">
      <hgroup className="py-4">
        <h4>Dashboard</h4>
      </hgroup>
      <div className="grid h-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        <section>1</section>
        <section>2</section>
        <section>3</section>
        <section>4</section>
        <section className="col-span-1 md:col-span-2">5</section>
        <section className="col-span-1 md:col-span-2">6</section>
        <section className="col-span-1 md:col-span-2 xl:col-span-3">7</section>
        <section>8</section>
        <section>9</section>
      </div>
    </div>
  );
};

export default Dashboard;
