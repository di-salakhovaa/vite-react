import Image from '../Image/Image'

const SKILL = [
    {
        id: 1,
        name: "Навык 1"
    },

    {
        id: 2,
        name: "Навык 2"
    },

    {
        id: 3,
        name: "Навык 3"
    }
];

const Homework = () => {
    return (
        <div>
            <Image path="https://i.pinimg.com/564x/86/b3/e3/86b3e3b707f86c420c9f545b616dc390.jpg" />
            <h1>Салахова Диляра Марселевна</h1>

            <ul>
                {
                    SKILL.map((item) => {
                        return <li key={item.name}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    );


}

export default Homework;