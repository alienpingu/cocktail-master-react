
export default async function changeActualTheme  ()  {
    (document.body.className !== 'dark') ? document.body.classList.add('dark') : document.body.classList.remove('dark')
}