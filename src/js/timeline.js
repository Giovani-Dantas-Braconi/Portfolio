
const historyData = [
{
    title: "Estágio (2023)",
    text: "Comecei como estagiário não remunerado, onde aprendi sobre liderança e organização mesmo sem experiência profissional anterior."
},
{
    title: "Efetivação (2024)",
    text: "Após 1 ano de dedicação, fui efetivado e passei a cuidar da estrutura de back-end da empresa, além de liderar entregas importantes."
},
{
    title: "Tech Lead (2025)",
    text: "Fui promovido a Tech Lead e assumi a responsabilidade de orientar novos colaboradores, estruturar projetos e manter a qualidade da entrega técnica."
},
{
    title: "Innovation Fest",
    text: "Fui convidado como representante da empresa para apresentar minha trajetória e soluções no evento de tecnologia Innovation Fest."
},
{
    title: "Inovado Legal",
    text: "Fui convidado como representante da empresa para apresentar minha trajetória e soluções no evento de tecnologia Innovation Fest."
}
];

function showDetails(index) {
const content = document.getElementById("historyContent");
content.innerHTML = `
    <h2>${historyData[index].title}</h2>
    <p>${historyData[index].text}</p>
`;
}
