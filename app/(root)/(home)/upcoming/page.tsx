import CallList from '@/components/CallList';

const UpcomingPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-[#204289]">
      <h1 className="text-3xl font-bold">Próximas reuniões</h1>

      <CallList type="upcoming" />
    </section>
  );
};

export default UpcomingPage;
