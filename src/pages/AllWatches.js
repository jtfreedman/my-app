const DUMMY_DATA = [
    {
        id: 'watch1',
        title: 'Watch 1',
        image: 'https://www.time4diamonds.com/media/mgs_blog/3/_/3_1.jpeg',
        price: '$500',
        description: "This is a dummy description"
    },
    {
        id: 'watch2',
        title: 'Watch 2',
        image: 'https://hodinkee.imgix.net/uploads/images/70756b46-7a9a-4f1b-8444-c7cf0fa06fc9/rolexdaydate07-06-20218684.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&fit=crop&ch=Width%2CDPR%2CSave-Data&alt=&w=820',
        price: '$700',
        description: "This is a dummy description"
    }
];


function AllWatchesPage() {
    return (
    <section>
        <h1>All Watches</h1>
        <ul>
            {DUMMY_DATA.map((watch) => {
                return <li key={watch.id}>{watch.title}</li>
            })}
        </ul>
        
    </section>
    );
}

export default AllWatchesPage;