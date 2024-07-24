"use client";

import './TextCKEditor.global.css';
import { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import {
    ClassicEditor,
    AccessibilityHelp,
    AutoImage,
    Autosave,
    BlockQuote,
    BlockToolbar,
    Bold,
    Code,
    CodeBlock,
    Essentials,
    FindAndReplace,
    Heading,
    ImageBlock,
    ImageCaption,
    ImageInline,
    ImageInsertViaUrl,
    ImageResize,
    ImageStyle,
    ImageTextAlternative,
    ImageToolbar,
    Italic,
    Link,
    LinkImage,
    List,
    ListProperties,
    Markdown,
    Paragraph,
    PasteFromMarkdownExperimental,
    RemoveFormat,
    SelectAll,
    Strikethrough,
    Subscript,
    Superscript,
    TodoList,
    Underline,
    Undo
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

export default function TextCKEditor() {
    const editorContainerRef = useRef(null);
    const editorRef = useRef(null);
    const [isLayoutReady, setIsLayoutReady] = useState(false);

    useEffect(() => {
        setIsLayoutReady(true);

        return () => setIsLayoutReady(false);
    }, []);

    const editorConfig = {
        toolbar: {
            items: [
                'undo',
                'redo',
                '|',
                'findAndReplace',
                'selectAll',
                '|',
                'heading',
                '|',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'subscript',
                'superscript',
                'code',
                'removeFormat',
                '|',
                'link',
                'insertImageViaUrl',
                'blockQuote',
                'codeBlock',
                '|',
                'bulletedList',
                'numberedList',
                'todoList',
                '|',
                'accessibilityHelp'
            ],
            shouldNotGroupWhenFull: false
        },
        plugins: [
            AccessibilityHelp,
            AutoImage,
            Autosave,
            BlockQuote,
            BlockToolbar,
            Bold,
            Code,
            CodeBlock,
            Essentials,
            FindAndReplace,
            Heading,
            ImageBlock,
            ImageCaption,
            ImageInline,
            ImageInsertViaUrl,
            ImageResize,
            ImageStyle,
            ImageTextAlternative,
            ImageToolbar,
            Italic,
            Link,
            LinkImage,
            List,
            ListProperties,
            Markdown,
            Paragraph,
            PasteFromMarkdownExperimental,
            RemoveFormat,
            SelectAll,
            Strikethrough,
            Subscript,
            Superscript,
            TodoList,
            Underline,
            Undo
        ],
        blockToolbar: ['bold', 'italic', '|', 'link', '|', 'bulletedList', 'numberedList'],
        heading: {
            options: [
                {
                    model: 'paragraph',
                    title: 'Paragraph',
                    class: 'ck-heading_paragraph'
                },
                {
                    model: 'heading1',
                    view: 'h1',
                    title: 'Heading 1',
                    class: 'ck-heading_heading1'
                },
                {
                    model: 'heading2',
                    view: 'h2',
                    title: 'Heading 2',
                    class: 'ck-heading_heading2'
                },
                {
                    model: 'heading3',
                    view: 'h3',
                    title: 'Heading 3',
                    class: 'ck-heading_heading3'
                },
                {
                    model: 'heading4',
                    view: 'h4',
                    title: 'Heading 4',
                    class: 'ck-heading_heading4'
                },
                {
                    model: 'heading5',
                    view: 'h5',
                    title: 'Heading 5',
                    class: 'ck-heading_heading5'
                },
                {
                    model: 'heading6',
                    view: 'h6',
                    title: 'Heading 6',
                    class: 'ck-heading_heading6'
                }
            ]
        },
        image: {
            toolbar: [
                'toggleImageCaption',
                'imageTextAlternative',
                '|',
                'imageStyle:inline',
                'imageStyle:wrapText',
                'imageStyle:breakText',
                '|',
                'resizeImage'
            ]
        },
        initialData:
            '# Hello!',
        link: {
            addTargetToExternalLinks: true,
            defaultProtocol: 'https://',
            decorators: {
                toggleDownloadable: {
                    mode: 'manual',
                    label: 'Downloadable',
                    attributes: {
                        download: 'file'
                    }
                }
            }
        },
        list: {
            properties: {
                styles: true,
                startIndex: true,
                reversed: true
            }
        },
        placeholder: 'Type or paste your content here!',
    };

    return (
        <div>
            <div className="main-container">
                <div
                    className="editor-container editor-container_classic-editor editor-container_include-block-toolbar"
                    ref={editorContainerRef}
                >
                    <div className="editor-container__editor">
                        <div ref={editorRef}>
                            {
                                isLayoutReady && (
                                    // @ts-ignore
                                    <CKEditor editor={ClassicEditor} config={editorConfig}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}