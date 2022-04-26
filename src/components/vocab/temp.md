```jsx
<Row>
    <Col>
        <Input value={name} onChange={e => setName(e.target.value)} style={{ width: 120 }} placeholder="Từ vựng"/>
    </Col>
    <Col>
        <Input value={type} onChange={e => setType(e.target.value)} style={{ width: 120, marginLeft: 60 }} placeholder="Loại từ"/>
    </Col>
    <Col>
        <Input
        value={mean} onChange={e => setMean(e.target.value)} onPressEnter={handleClick}
        style={{ width: 120, marginLeft: 60 }} placeholder="Nghĩa"
        />
    </Col>
    <Col>
        <Button 
        onClick={handleClick}
        type="primary"
        style={{ marginLeft: 60 }}
        >
        Add
        </Button>
    </Col>
    </Row>
```