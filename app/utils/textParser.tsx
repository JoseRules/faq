import React from 'react';

export const parseAnswerText = (text: string) => {
  // Split by lines to handle multi-line answers
  const lines = text.split('\n');
  
  return lines.map((line, index) => {
    const trimmedLine = line.trim();
    
    // Check for bullet points (various formats)
    if (trimmedLine.match(/^[-*•]\s+/)) {
      // Remove the bullet and create a list item
      const content = trimmedLine.replace(/^[-*•]\s+/, '');
      return (
        <li key={index} className="ml-4 text-foreground/80 text-sm leading-relaxed">
          {parseInlineFormatting(content)}
        </li>
      );
    }
    
    // Regular text line
    if (trimmedLine) {
      return (
        <p key={index} className="text-foreground/80 text-sm leading-relaxed mb-2">
          {parseInlineFormatting(trimmedLine)}
        </p>
      );
    }
    
    // Empty line - add spacing
    return <div key={index} className="h-2" />;
  }).filter(Boolean); // Filter out any undefined values
};

// Helper function to parse inline formatting like bold text
const parseInlineFormatting = (text: string) => {
  // Split text by bold markers
  const parts = text.split(/(\*\*.*?\*\*)/g);
  
  return parts.map((part, index) => {
    // Check if this part is bold text (wrapped in **)
    if (part.match(/^\*\*.*\*\*$/)) {
      // Remove the ** markers and make it bold
      const boldText = part.replace(/\*\*/g, '');
      return (
        <strong key={index} className="font-semibold text-foreground">
          {boldText}
        </strong>
      );
    }
    
    // Regular text
    return part;
  });
};
