

function parseMarkdown(content) {
    const titleRegex = /<title>(.*?)<\/title>/;
    const contentRegex = /<content>(.*?)<\/content>/;

    const titleMatch = titleRegex.exec(content);
    const contentMatch = contentRegex.exec(content);

    if (titleMatch && contentMatch) {
        return {
            title: titleMatch[1],
            content: contentMatch[1],
        };
    } else {
        // Handle cases where title or content is missing
        return null;
    }
}